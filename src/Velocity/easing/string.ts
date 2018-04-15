/*
 * VelocityJS.org (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 *
 * Easings to act on strings, either set at the start or at the end depending on
 * need.
 */

import {Velocity} from "../../../index.d";

import {registerEasing} from "./easings";

export declare namespace Velocity {
	export interface VelocityEasingsType {
		"at-start": true;
		"during": true;
		"at-end": true;
	}
}

/**
 * Easing function that sets to the specified value immediately after the
 * animation starts.
 */
export function atStart(percentComplete: number, startValue: any, endValue: any): any {
	return percentComplete === 0
		? startValue
		: endValue;
}

/**
 * Easing function that sets to the specified value while the animation is
 * running.
 */
export function during(percentComplete: number, startValue: any, endValue: any): any {
	return percentComplete === 0 || percentComplete === 1
		? startValue
		: endValue;
}

/**
 * Easing function that sets to the specified value when the animation ends.
 */
export function atEnd(percentComplete: number, startValue: any, endValue: any): any {
	return percentComplete === 1
		? endValue
		: startValue;
}

registerEasing(["at-start", atStart]);
registerEasing(["during", during]);
registerEasing(["at-end", atEnd]);
