import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../player.model';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayerService} from "../player.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-player-dialog',
    templateUrl: './player-dialog.component.html',
    styleUrls: ['./player-dialog.component.css']
})
export class PlayerDialogComponent implements OnInit {
    createPlayerForm: FormGroup;
    player: Player;

    constructor(
        public activeModal: NgbActiveModal,
        private playerService: PlayerService) {
    }

    ngOnInit(): void {
        this.player = this.player || new Player();
        this.createPlayerForm = new FormGroup({
            'nome': new FormControl('', Validators.required),
            'overall': new FormControl(null, Validators.required),
            'idade': new FormControl(null, Validators.required),
            'peso': new FormControl(null, Validators.required),
            'altura': new FormControl(null, Validators.required),
            'classeOne': new FormControl('false', Validators.required),
            'classeTwo': new FormControl('false', Validators.required),
            'forca': new FormControl(null, Validators.required),
            'velocidade': new FormControl(null, Validators.required),
            'velocidadeCombate': new FormControl(null, Validators.required),
            'agilidade': new FormControl(null, Validators.required),
            'resistencia': new FormControl(null, Validators.required),
            'qiCombate': new FormControl(null, Validators.required),
            'estrategia': new FormControl(null, Validators.required),
            'observacao': new FormControl(null, Validators.required),
            'estamina': new FormControl(null, Validators.required),
            'habMarciais': new FormControl(null, Validators.required),
            'maestria': new FormControl(null, Validators.required),
            'atqPotencial': new FormControl(null, Validators.required),
        });
        if (this.player.id !== undefined) {
            this.entityToReactForms(this.createPlayerForm, this.player);
        }
    }

    savePlayer() {
        if (this.createPlayerForm.invalid) return;
        this.player = this.reactFormsToEntity(this.player, this.createPlayerForm.value);
        if (this.player.id !== undefined) {
            this.playerService.updatePlayer(this.player).subscribe(() => {
                this.activeModal.close();
                this.playerService.reloadPage.next(true);
            });
        } else {
            this.playerService.createPlayer(this.player).subscribe(() => {
                this.activeModal.close();
                this.playerService.reloadPage.next(true);
            });
        }
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
}

@Component({selector: 'app-player-dialog-modal', template: ''})
export class PlayerDialogModalComponent implements OnDestroy {
    routeSub: any;
    modalRef = null;

    constructor(
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private router: Router,
        private playerService: PlayerService
    ) {
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                console.log('tem Params', params['id']);
                this.playerService.getPlayerById(params['id']).subscribe((data) => {
                    this.modalRef = this.modalService.open(PlayerDialogComponent as Component);
                    this.modalRef.componentInstance.player = data;
                    this.result();
                });
            } else {
                console.log('sem Params');
                this.modalRef = this.modalService.open(PlayerDialogComponent as Component);
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
