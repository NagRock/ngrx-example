import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {addEntity, addEntityWithDelay} from "./actions";
import {delay, map} from "rxjs/operators";

@Injectable()
export class AddWithDelayEffects {
    addWithDelay$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addEntityWithDelay),
            delay(1000),    // HTTP REQUEST
            map(action => {
                return addEntity({id: action.id, name: action.name});
            }),
        );
    });

    constructor(private actions$: Actions) {
    }
}
