import { Component } from '@angular/core';

@Component({
    selector: "feature",
    templateUrl: 'app/templates/feature-template.html'
})

export class FeatureComponent {
    name = "Issue Categories";
    scenarios = [];
    status = "PASSED";
}