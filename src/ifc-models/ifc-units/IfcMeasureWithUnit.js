/**
 * [https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifcmeasureresource/lexical/ifcmeasurewithunit.htm]
 */

import { IfcBase } from "../IfcBase";
import {
  baseConstructor,
  getItemByType,
  registerConstructorByType,
} from "../../ifc-utils/ifc-constructors";
import { ifcTypes as t } from "../../ifc-utils/ifc-types";

class IfcMeasureWithUnit extends IfcBase {
  getIfcProperties() {
    super.getIfcProperties();
    this.valueComponent = this.extractIfcValue();
    this.unitComponent = getItemByType(this, this.extractId());
  }
}

function getIfcMeasureWithUnit(caller, ifcLine) {
  return baseConstructor(caller, IfcMeasureWithUnit, ifcLine);
}

registerConstructorByType(t.ifcMeasureWithUnit, getIfcMeasureWithUnit);
