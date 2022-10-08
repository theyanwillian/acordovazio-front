import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../player.model';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayerService} from "../player.service";

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
    @Input() id;
    player: Player;

    constructor(
        public activeModal: NgbActiveModal,
        private playerService: PlayerService) {
    }

    ngOnInit(): void {
        this.player = new Player();
        this.playerService.getPlayerById(this.id).subscribe(data => {
            this.player = data;
        });
    }
}

@Component({selector: 'app-player-detail-modal', template: ''})
export class PlayerDetailModalComponent implements OnDestroy {
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
                    .open(PlayerDetailComponent as Component);
                this.modalRef.componentInstance.id = params['id'];
            } else {
                this.modalRef = this.modalService
                    .open(PlayerDetailComponent as Component);
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
