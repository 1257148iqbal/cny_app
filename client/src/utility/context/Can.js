// ** Imports createContext function
// ** Imports createContextualCan function
import { createContextualCan } from '@casl/react';
import { createContext } from 'react';


// ** Create Context
export const AbilityContext = createContext();

// ** Init Can Context
export const Can = createContextualCan( AbilityContext.Consumer );
