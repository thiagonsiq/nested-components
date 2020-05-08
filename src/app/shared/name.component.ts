import { Component, OnChanges, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'nc-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
    @Input() parentForm: FormGroup;
    @Output() firstNameChanged: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit() {
        this.onChanges();
    }

    onChanges(): void {
        this.parentForm.valueChanges.subscribe(val => {
            this.firstNameChanged.emit(this.parentForm.get('firstName').value);
        });
    }
}
