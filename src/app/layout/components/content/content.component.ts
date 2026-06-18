import {Component, ViewEncapsulation} from '@angular/core';
import {Constants} from "../../../main/shared/constants/Constants";

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContentComponent
{
    constants = Constants;
    /**
     * Constructor
     */
    constructor()
    {
    }
}
