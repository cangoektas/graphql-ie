import "core-js/es/promise";
import "core-js/es/symbol";
// graphql
import "core-js/modules/es.object.values";
import "core-js/modules/es.object.entries";
import "core-js/stable/set";
import "core-js/es/string/starts-with";
import "core-js/es/array/find";
import "core-js/stable/map";
// @graphql-tools/schema
import "core-js/es/array/fill";
import "core-js/es/array/includes";
import "core-js/es/array/flat-map";
import globalThisPolyfill from "core-js/internals/global";
if (typeof globalThis != "object") {
  // @ts-ignore
  window.globalThis = globalThisPolyfill;
}
