import { createReducer } from '@ngrx/store';
import { Entity } from './model';

export const entitiesReducer = createReducer([]);
export const selectedEntityReducer = createReducer<Entity | undefined>({id: 'fristId', name: 'sampleEntity'});
export const relationsReducer = createReducer([]);