import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.css']
})
export class AlertComponent {

    showAlert = false;
    currentTimeout = null;

    @Input('alertMsg')
    alertMsg = 'Concluído!';

    @Input('alertStatus')
    alertStatus = 'danger';

    @Input('alertIcon')
    alertIcon = 'check';

    @Output() close = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = setTimeout(() => {
            this.close.emit();
        }, 5000);
    }

    closeAlert() {
        this.showAlert = false;
        this.close.emit();
    }
}
