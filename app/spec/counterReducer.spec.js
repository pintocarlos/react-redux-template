'use strict';
import {Map} from "immutable";
import {counter} from "reducers/counterReducer";
import {incrementCounter, decrementCounter, resetCounter} from "actions";

describe("counterReducer", () => {
    describe("when action is unknown", () => {
        it("should return the initialState", () => {
            let action = {type: "UNKNOWN"};

            let newState = counter(undefined, action);

            expect(newState).to.deep.equal(Map({
                value: 0
            }));
        })
    });

    describe("when incrementCounter action is dispatched", () => {
       it("should increase value by 1", () => {
           let action = incrementCounter(1);
           let currentState = counter();
           expect(currentState.get("value")).to.equal(0);

           let incrementedState = counter(currentState, action);
           expect(incrementedState.get("value")).to.equal(1);
       }) ;
    });

    describe("when decrementCounter action is dispatched", () => {
        it("should decrease value by 1", () => {
            let action = decrementCounter(1);
            let currentState = counter();
            expect(currentState.get("value")).to.equal(0);

            let decrementState = counter(currentState, action);
            expect(decrementState.get("value")).to.equal(-1);
        }) ;
    });

    describe("when Reset action is dispatched", () => {
        it("should reset value to initial state value of 0", () => {
            let action = resetCounter();
            let currentState = counter().merge({
                value: 10
            });

            let resetState = counter(currentState, action);
            expect(resetState.get("value")).to.equal(0);
        });
    });
});