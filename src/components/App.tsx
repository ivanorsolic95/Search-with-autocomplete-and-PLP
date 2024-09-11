import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import aa from "search-insights";
import {
  Configure,
  Hits,
  InstantSearch,
  Pagination,
  CurrentRefinements,
  ClearRefinements,
  HierarchicalMenu,
} from 'react-instantsearch';

import { APP_ID } from '../constants/constants';

import { ConditionalRefinementPanel } from './ConditionalRefinementPanel';
import { ConditionalRangeSlider } from './ConditionalRangeSlider';
import { Panel } from './Panel';
import {Autocomplete} from './Autocomplete';
import { Hit } from './Hit';

import '../css/App.css';

require('dotenv').config()

const API_KEY = process.env.REACT_APP_API_KEY as string
const AUTHENTICATED_USER_TOKEN = process.env.REACT_APP_AUTHENTICATED_USER_TOKEN as string

//Create a search client to interact with the Algolia search API
const searchClient = algoliasearch(APP_ID, API_KEY);

//Initialize Algolia analytics service to start collecting and processing data 
aa('init', {
  appId: APP_ID,
  apiKey: API_KEY,
  authenticatedUserToken: AUTHENTICATED_USER_TOKEN,
});

// Keep widget state even when it's removed, if shared with other widgets
const future = { preserveSharedStateOnUnmount: true };

export function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">Haas</a>
        </h1>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="poc_alt_HAAS" future={future} insights>
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters">
              <Panel header="Parent categories">
                <HierarchicalMenu
                  attributes={[
                    'parent_categories.lvl0',
                    'parent_categories.lvl1',
                    'parent_categories.lvl2',
                    'parent_categories.lvl3',
                    'parent_categories.lvl4',
                  ]}
                />
              </Panel>

              <ConditionalRefinementPanel
                header="System of Measurement"
                attribute="System of Measurement"
              />
              <ConditionalRefinementPanel
                header="Milling Cutter Series"
                attribute="Milling Cutter Series"
                showMore={true}
                searchable={true}
              />
              <ConditionalRefinementPanel
                header="Through Tool Coolant"
                attribute="Through Tool Coolant"
              />
              <ConditionalRefinementPanel header="purchasable" attribute="purchasable" />
              <ConditionalRefinementPanel header="Toolpath Type" attribute="Toolpath Type" />
              <ConditionalRefinementPanel header="Coupling Style" attribute="Coupling Style" />
              <ConditionalRefinementPanel
                header="Country of Origin"
                attribute="Country of Origin"
              />

              <ConditionalRangeSlider attribute="prices.USD" header="Price Range" />
              <ConditionalRangeSlider attribute="Maximum RPM" header="Maximum RPM" />
              <ConditionalRangeSlider attribute="Weight (kg)" header="Weight (kg)" />
              <ConditionalRangeSlider
                attribute="[Ød2] Diameter (in)"
                header="[Ød2] Diameter (in)"
              />
              <ConditionalRangeSlider
                attribute="[Ød2] Diameter (mm)"
                header="[Ød2] Diameter (mm)"
              />
              <ConditionalRangeSlider
                header="[Ød1] Diameter (in)"
                attribute="[Ød1] Diameter (in)"
              />
              <ConditionalRangeSlider
                header="[Ød2] Diameter (in)"
                attribute="[Ød2] Diameter (in)"
              />
              <ConditionalRangeSlider
                header="[Ød2] Diameter (mm)"
                attribute="[Ød2] Diameter (mm)"
              />
              <ConditionalRangeSlider
                header="[a] Keyway Width (in)"
                attribute="[a] Keyway Width (in)"
              />
              <ConditionalRangeSlider
                header="[a] Keyway Width (mm)"
                attribute="[a] Keyway Width (mm)"
              />
              <ConditionalRangeSlider
                header="[b] Keyway Depth (in)"
                attribute="[b] Keyway Depth (in)"
              />
              <ConditionalRangeSlider
                header="[b] Keyway Depth (mm)"
                attribute="[b] Keyway Depth (mm)"
              />
              <ConditionalRangeSlider
                header="[°] Lead Angle (degrees)"
                attribute="[°] Lead Angle (degrees)"
              />
              <ConditionalRangeSlider
                header="[E] Arbor Hole Depth (in)"
                attribute="[E] Arbor Hole Depth (in)"
              />
              <ConditionalRangeSlider
                header="[OAL] Overall Length (in)"
                attribute="[OAL] Overall Length (in)"
              />
              <ConditionalRangeSlider
                header="[OAL] Overall Length (mm)"
                attribute="[OAL] Overall Length (mm)"
              />
              <ConditionalRangeSlider
                header="[Z] Number of Cutting Teeth"
                attribute="[Z] Number of Cutting Teeth"
              />
              <ConditionalRangeSlider
                header="[ØDC] Cutting Diameter (in)"
                attribute="[ØDC] Cutting Diameter (in)"
              />
              <ConditionalRangeSlider
                header="[ØDC] Cutting Diameter (mm)"
                attribute="[ØDC] Cutting Diameter (mm)"
              />
              <ConditionalRangeSlider
                header="Torque of Insert Screw (Ncm)"
                attribute="Torque of Insert Screw (Ncm)"
              />
              <ConditionalRangeSlider
                header="[Ap] Max. Cutting Depth (in)"
                attribute="[Ap] Max. Cutting Depth (in)"
              />
              <ConditionalRangeSlider
                header="[Ap] Max. Cutting Depth (mm)"
                attribute="[Ap] Max. Cutting Depth (mm)"
              />
              <ConditionalRangeSlider
                header="[Ød] Arbor Hole Diameter (in)"
                attribute="[Ød] Arbor Hole Diameter (in)"
              />
              <ConditionalRangeSlider
                header="[Ød] Arbor Hole Diameter (mm)"
                attribute="[Ød] Arbor Hole Diameter (mm)"
              />
              <ConditionalRangeSlider
                header="[ØDCX] Max Cutting Diameter (in)"
                attribute="[ØDCX] Max Cutting Diameter (in)"
              />
              <ConditionalRangeSlider
                header="[ØDCX] Max Cutting Diameter (mm)"
                attribute="[ØDCX] Max Cutting Diameter (mm)"
              />
            </div>

            <div className="search-panel__results">
              <Autocomplete
                searchClient={searchClient}
                placeholder="Search products"
                detachedMediaQuery="none"
                openOnFocus
              />
              <div className="custom-refinements-wrapper">
                <CurrentRefinements
                  classNames={{
                    root: 'current-refinements',
                    list: 'current-refinements-list',
                    item: 'current-refinement-item',
                    label: 'current-refinement-label',
                    category: 'current-refinement-category',
                    categoryLabel: 'current-refinement-category-label',
                    delete: 'current-refinement-delete',
                  }}
                />
              </div>
              <ClearRefinements />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

