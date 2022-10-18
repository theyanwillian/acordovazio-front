import {Component, OnDestroy, OnInit} from '@angular/core';
import {Team} from '../team.model';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamService} from "../team.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-team-dialog',
    templateUrl: './team-dialog.component.html',
    styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit {
    teamForm: FormGroup;
    team: Team;
    faStar = faStar;

    constructor(
        public activeModal: NgbActiveModal,
        private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.team = this.team || new Team();
        this.initTeamForm();
        if (this.team.id !== undefined) {
            this.entityToReactForms(this.teamForm, this.team);
        } else {
            this.team.stars = 0;
        }
    }

    saveTeam() {
        if (this.teamForm.invalid) return;
        this.team = this.reactFormsToEntity(this.team, this.teamForm.value);
        if (this.team.id !== undefined) {
            this.teamService.updateTeam(this.team).subscribe(() => {
                this.activeModal.close();
                this.teamService.reloadPage.next(true);
            });
        } else {
            this.teamService.createTeam(this.team).subscribe(() => {
                this.activeModal.close();
                this.teamService.reloadPage.next(true);
            });
        }
    }

    getFormValue(field: string) {
        return this.teamForm.get(field).value;
    }

    reactFormsToEntity(entity: any, formValue: any): any {
        Object.keys(formValue).forEach((item) => entity[item] = formValue[item]);
        return entity;
    }

    entityToReactForms(formGroup: FormGroup, entity: any): void {
        Object.keys(entity).forEach((item) => {
            if (formGroup.controls[item]) {
                formGroup.controls[item].setValue(entity[item])
            }
        });
    }

    onRateChange() {
        this.team.stars = (this.getFormValue('ofensivo')    +
                           this.getFormValue('defensivo')   +
                           this.getFormValue('sinergia')    +
                           this.getFormValue('estrategia')  +
                           this.getFormValue('caereo')      +
                           this.getFormValue('tecnico'))    / 6;
    }

    private initTeamForm() {
        this.teamForm = new FormGroup({
            'name': new FormControl('', Validators.required),
            'coach': new FormControl(null, Validators.required),
            'overall': new FormControl(null, Validators.required),
            'caracteristica': new FormControl(null, Validators.required),
            'ofensivo': new FormControl(0, Validators.required),
            'defensivo': new FormControl(0, Validators.required),
            'estrategia': new FormControl(0, Validators.required),
            'sinergia': new FormControl(0, Validators.required),
            'caereo': new FormControl(0, Validators.required),
            'tecnico': new FormControl(0, Validators.required)
        });
    }
}

@Component({selector: 'app-team-dialog-modal', template: ''})
export class TeamDialogModalComponent implements OnDestroy {
    routeSub: any;
    modalRef = null;

    constructor(
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private router: Router,
        private teamService: TeamService
    ) {
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                console.log('tem Params', params['id']);
                this.teamService.getTeamById(params['id']).subscribe((data) => {
                    this.modalRef = this.modalService.open(TeamDialogComponent as Component);
                    this.modalRef.componentInstance.team = data;
                    this.result();
                });
            } else {
                console.log('sem Params');
                this.modalRef = this.modalService.open(TeamDialogComponent as Component);
                this.result();
            }
        });
    }

    result(){
        this.modalRef.result.then(() => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.modalRef = null;
        }, () => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.modalRef = null;
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
