import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotationBuilderComponent } from './rotation-builder/rotation-builder.component';
import { RotationComponent } from './rotation/rotation.component';
import { FormsModule } from '@angular/forms';
import { EditableTickComponent } from './editable-tick/editable-tick.component';
import { TimeVisualizerComponent } from './time-visualizer/time-visualizer.component';
import { PlannedTickComponent } from './planned-tick/planned-tick.component';
import { ActualTickComponent } from './actual-tick/actual-tick.component';

@NgModule({
  declarations: [
    RotationBuilderComponent,
    RotationComponent,
    EditableTickComponent,
    TimeVisualizerComponent,
    PlannedTickComponent,
    ActualTickComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    RotationBuilderComponent,
    RotationComponent,
    EditableTickComponent,
    TimeVisualizerComponent,
    PlannedTickComponent,
    ActualTickComponent,
  ],
})
export class RunescapeModule { }
