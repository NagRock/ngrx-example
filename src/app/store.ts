import {AppStore, FeatureStore} from './model';
import {createReducer, on} from '@ngrx/store';
import {addEntity, removeEntity, selectEntity} from "./actions";


export const appReducers = {
    feature: createReducer<FeatureStore>({
            entities: [{id: 'default', name: 'Default entity'}],
            selectedEntity: undefined,
            relations: [],
        },
        on(selectEntity, (state, entity) => ({...state, selectedEntity: entity})),
        on(addEntity, (state, entity) => ({...state, entities: [...state.entities, entity]})),
        on(removeEntity, (state, payload) => ({...state, entities: state.entities.filter(x => x.id !== payload.id)})),
    ),
}


export const selectFeature = (state: AppStore) => state.feature;
export const selectSelectedEntity = (state: FeatureStore) => state.selectedEntity;
export const selectAllEntities = (state: FeatureStore) => state.entities;
