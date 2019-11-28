export interface Entity {
  id: string;
  name: string;
}

export interface Relation {
  fromId: string;
  toId: string;
}

export interface AppStore {
  feature: FeatureStore;
}

export interface FeatureStore {
  entities: Entity[];
  selectedEntity: Entity | undefined;
  relations: Relation[];
}
