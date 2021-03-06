import { 
    MAP_LOAD, 
    LAYER_VISIBILITY_CHANGE, 
    LEGEND_TOGGLE, 
    CAMERA_LAYER_FILTER, 
    CAMERA_LAYER_QUERY 
} from '../actions/mapActions';

import {
    buildLayers,
    setLayerVisibility,
    toggleLegend,
    filterCameraLayer,
    queryCameraLayer
} from '../services/arcgisService';

const defaultMapReducerState = {
    layers: null,
    filter: null,
    query: null,
    legendVisible: false
};

const mapReducer = (state = defaultMapReducerState, action) => {
    switch (action.type) {

        case MAP_LOAD:
            return {
                ...state,
                layers: buildLayers()
            };

        case LAYER_VISIBILITY_CHANGE:
            setLayerVisibility(action.layerId, action.visible);
            return {
                ...state,
                layers: buildLayers()
            };

        case LEGEND_TOGGLE:
            const legendVisible = !state.legendVisible;
            toggleLegend(legendVisible);
            return {
                ...state,
                legendVisible
            };

        case CAMERA_LAYER_FILTER:
            filterCameraLayer(action.filter);
            return {
                ...state,
                filter: action.filter
            };

        case CAMERA_LAYER_QUERY:
            queryCameraLayer(action.query);
            return {
                ...state,
                query: action.query
            };

        default:
            return state;
    }
};

export default mapReducer;