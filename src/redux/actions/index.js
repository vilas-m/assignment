
              import { INCREMENT_COUNT } from "../constants/action-types";
              
              export function incrementCount(payload) {
                  return { type: INCREMENT_COUNT, payload };
              }