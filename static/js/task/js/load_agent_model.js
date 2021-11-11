import { shuffle } from "lodash";
import * as Overcooked from "overcooked"
let OvercookedGame = Overcooked.OvercookedGame.OvercookedGame;
let OvercookedMDP = Overcooked.OvercookedMDP;
let Direction = OvercookedMDP.Direction;
let Action = OvercookedMDP.Action;
let [NORTH, SOUTH, EAST, WEST] = Direction.CARDINAL;
let [STAY, INTERACT] = [Direction.STAY, Action.INTERACT];

// Returns a Promise that resolves to a policy
export default function getOvercookedPolicy_2(model_type, layout_name, playerIndex) {
    return new Promise(function(resolve, reject) {
        // resolve(function (state, game) {
        //     let action = shuffle(Direction.CARDINAL)[0];
        //     return action;
        // });
        setTimeout(() => {
            resolve(function (state, game) {
                let action = shuffle(Action.ALL_ACTIONS)[0];
                return action;
            });
        }, 300); 
    });
}
