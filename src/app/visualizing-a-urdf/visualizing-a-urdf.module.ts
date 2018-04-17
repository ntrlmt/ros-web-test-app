import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizingAUrdfComponent } from './visualizing-a-urdf.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        VisualizingAUrdfComponent
    ],
    exports: [
        VisualizingAUrdfComponent
    ]
})

export class VisualizingAUrdfModule{ }