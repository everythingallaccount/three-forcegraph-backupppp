import { Group } from 'three';
const three = window.THREE ? window.THREE : { Group }; // Prefer consumption from global THREE, if exists

import ForceGraph from './forcegraph-kapsule.js';
import fromKapsule from './utils/kapsule-class.js';
import {ll} from "./utils/utilllllllll.js";




ll("The things being exported here will be directly FromKapsule Class")
export default fromKapsule(ForceGraph, three.Group, true);
