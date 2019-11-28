import {Injectable} from '@angular/core';
import {createSelector, Store} from '@ngrx/store';
import {selectAllEntities, selectSelectedEntity, selectFeature} from './store';
import {AppStore, Entity} from './model';
import {Observable} from "rxjs";
import {addEntity, addEntityWithDelay, removeEntity, selectEntity} from "./actions";

@Injectable()
export class EntityService {
    selected$: Observable<Entity>;
    entities$: Observable<Entity[]>;

    constructor(private store: Store<AppStore>) {
        this.selected$ = store.select(createSelector(selectFeature, selectSelectedEntity));
        this.entities$ = store.select(createSelector(selectFeature, selectAllEntities));
    }

    selectEntity(entity: Entity) {
        this.store.dispatch(selectEntity(entity));
    }

    addEntity(name: string) {
        let randomId = 'entity_' + Math.random().toString();
        this.store.dispatch(addEntity({id: randomId, name}));
    }

    addEntityWithDelay(name: string) {
        let randomId = 'entity_' + Math.random().toString();
        this.store.dispatch(addEntityWithDelay({id: randomId, name}));
    }

    removeEntity(id: string) {
        this.store.dispatch(removeEntity({id}));
    }
}
