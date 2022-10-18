import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Team} from '../team.model';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamService} from "../team.service";

@Component({
    selector: 'app-team-detail',
    templateUrl: './team-detail.component.html',
    styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
    @Input() id;
    team: Team;

    constructor(
        public activeModal: NgbActiveModal,
        private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.team = new Team();
        this.teamService.getTeamById(this.id).subscribe(data => {
            this.team = data;
        });
    }
}

@Component({selector: 'app-team-detail-modal', template: ''})
export class TeamDetailModalComponent implements OnDestroy {
    routeSub: any;
    modalRef = null;

    constructor(
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['id']) {
                this.modalRef = this.modalService
                    .open(TeamDetailComponent as Component);
                this.modalRef.componentInstance.id = params['id'];
            } else {
                this.modalRef = this.modalService
                    .open(TeamDetailComponent as Component);
            }
            this.modalRef.result.then(result => {
                this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
                this.modalRef = null;
            }, reason => {
                this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
                this.modalRef = null;
            });
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
