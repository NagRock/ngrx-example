import {createAction, props} from "@ngrx/store";
import {Entity} from "./model";

export const selectEntity = createAction('[SSC Entity] select', props<Entity>());

export const addEntity = createAction('[SSC Entity] add', props<Entity>());

export const removeEntity = createAction('[SSC Entity] remove', props<{id: string}>());

export const addEntityWithDelay = createAction('[SSC Entity] add with delay', props<Entity>());
