/**
 * [https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifcgeometricconstraintresource/lexical/ifclocalplacement.htm]
 */

import {
  baseConstructor,
  getItemByType,
  registerConstructorByType,
} from "../../ifc-utils/ifc-constructors";
import { ifcTypes as t } from "../../ifc-utils/ifc-types";
import { IfcObjectPlacement } from "./IfcObjectPlacement";

class IfcLocalPlacement extends IfcObjectPlacement {
  getIfcProperties() {
    super.getIfcProperties();
    this.placementRelTo = getItemByType(this, this.extractId());
    this.relativePlacement = getItemByType(this, this.extractId());
  }
}

function getIfcLocalPlacement(caller, ifcLine) {
  return baseConstructor(caller, IfcLocalPlacement, ifcLine);
}

registerConstructorByType(t.ifcLocalPlacement, getIfcLocalPlacement);
