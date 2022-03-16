"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9322],{6474:function(e,t){function n(e){var t=void 0;return"undefined"!==typeof Reflect&&"function"===typeof Reflect.ownKeys?t=Reflect.ownKeys(e.prototype):(t=Object.getOwnPropertyNames(e.prototype),"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e.prototype)))),t.forEach((function(t){if("constructor"!==t){var n=Object.getOwnPropertyDescriptor(e.prototype,t);"function"===typeof n.value&&Object.defineProperty(e.prototype,t,o(e,t,n))}})),e}function o(e,t,n){var o=n.value;if("function"!==typeof o)throw new Error("@autobind decorator can only be applied to methods not: "+typeof o);var r=!1;return{configurable:!0,get:function(){if(r||this===e.prototype||this.hasOwnProperty(t))return o;var n=o.bind(this);return r=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),r=!1,n}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 1===t.length?n.apply(void 0,t):o.apply(void 0,t)},e.exports=t.default},9322:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(3288),a=(o=r)&&o.__esModule?o:{default:o};t.default=a.default,e.exports=t.default},3203:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default={activeTrack:"input-range__track input-range__track--active",disabledInputRange:"input-range input-range--disabled",inputRange:"input-range",labelContainer:"input-range__label-container",maxLabel:"input-range__label input-range__label--max",minLabel:"input-range__label input-range__label--min",slider:"input-range__slider",sliderContainer:"input-range__slider-container",track:"input-range__track input-range__track--background",valueLabel:"input-range__label input-range__label--value"},e.exports=t.default},3288:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=v(n(7294)),i=v(n(5697)),u=v(n(6474)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(3232)),l=v(n(3203)),p=v(n(9191)),c=v(n(2807)),d=v(n(2097)),f=v(n(2737)),h=v(n(752)),m=n(8302),y=n(6878);function v(e){return e&&e.__esModule?e:{default:e}}function b(e,t,n,o,r){var a={};return Object.keys(o).forEach((function(e){a[e]=o[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,o){return o(e,t,n)||n}),a),r&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(r):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var g=(o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.startValue=null,n.node=null,n.trackNode=null,n.isSliderDragging=!1,n.lastKeyMoved=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,null,[{key:"propTypes",get:function(){return{allowSameValues:i.default.bool,ariaLabelledby:i.default.string,ariaControls:i.default.string,classNames:i.default.objectOf(i.default.string),disabled:i.default.bool,draggableTrack:i.default.bool,formatLabel:i.default.func,maxValue:c.default,minValue:c.default,name:i.default.string,onChangeStart:i.default.func,onChange:i.default.func.isRequired,onChangeComplete:i.default.func,step:i.default.number,value:d.default}}},{key:"defaultProps",get:function(){return{allowSameValues:!1,classNames:l.default,disabled:!1,maxValue:10,minValue:0,step:1}}}]),r(t,[{key:"componentWillUnmount",value:function(){this.removeDocumentMouseUpListener(),this.removeDocumentTouchEndListener()}},{key:"getComponentClassName",value:function(){return this.props.disabled?this.props.classNames.disabledInputRange:this.props.classNames.inputRange}},{key:"getTrackClientRect",value:function(){return this.trackNode.getClientRect()}},{key:"getKeyByPosition",value:function(e){var t=s.getValueFromProps(this.props,this.isMultiValue()),n=s.getPositionsFromValues(t,this.props.minValue,this.props.maxValue,this.getTrackClientRect());if(this.isMultiValue()&&(0,m.distanceTo)(e,n.min)<(0,m.distanceTo)(e,n.max))return"min";return"max"}},{key:"getKeys",value:function(){return this.isMultiValue()?["min","max"]:["max"]}},{key:"hasStepDifference",value:function(e){var t=s.getValueFromProps(this.props,this.isMultiValue());return(0,m.length)(e.min,t.min)>=this.props.step||(0,m.length)(e.max,t.max)>=this.props.step}},{key:"isMultiValue",value:function(){return(0,m.isObject)(this.props.value)}},{key:"isWithinRange",value:function(e){return this.isMultiValue()?e.min>=this.props.minValue&&e.max<=this.props.maxValue&&this.props.allowSameValues?e.min<=e.max:e.min<e.max:e.max>=this.props.minValue&&e.max<=this.props.maxValue}},{key:"shouldUpdate",value:function(e){return this.isWithinRange(e)&&this.hasStepDifference(e)}},{key:"updatePosition",value:function(e,t){var n=s.getValueFromProps(this.props,this.isMultiValue()),o=s.getPositionsFromValues(n,this.props.minValue,this.props.maxValue,this.getTrackClientRect());o[e]=t,this.lastKeyMoved=e,this.updatePositions(o)}},{key:"updatePositions",value:function(e){var t={min:s.getValueFromPosition(e.min,this.props.minValue,this.props.maxValue,this.getTrackClientRect()),max:s.getValueFromPosition(e.max,this.props.minValue,this.props.maxValue,this.getTrackClientRect())},n={min:s.getStepValueFromValue(t.min,this.props.step),max:s.getStepValueFromValue(t.max,this.props.step)};this.updateValues(n)}},{key:"updateValue",value:function(e,t){var n=s.getValueFromProps(this.props,this.isMultiValue());n[e]=t,this.updateValues(n)}},{key:"updateValues",value:function(e){this.shouldUpdate(e)&&this.props.onChange(this.isMultiValue()?e:e.max)}},{key:"incrementValue",value:function(e){var t=s.getValueFromProps(this.props,this.isMultiValue())[e]+this.props.step;this.updateValue(e,t)}},{key:"decrementValue",value:function(e){var t=s.getValueFromProps(this.props,this.isMultiValue())[e]-this.props.step;this.updateValue(e,t)}},{key:"addDocumentMouseUpListener",value:function(){this.removeDocumentMouseUpListener(),this.node.ownerDocument.addEventListener("mouseup",this.handleMouseUp)}},{key:"addDocumentTouchEndListener",value:function(){this.removeDocumentTouchEndListener(),this.node.ownerDocument.addEventListener("touchend",this.handleTouchEnd)}},{key:"removeDocumentMouseUpListener",value:function(){this.node.ownerDocument.removeEventListener("mouseup",this.handleMouseUp)}},{key:"removeDocumentTouchEndListener",value:function(){this.node.ownerDocument.removeEventListener("touchend",this.handleTouchEnd)}},{key:"handleSliderDrag",value:function(e,t){var n=this;if(!this.props.disabled){var o=s.getPositionFromEvent(e,this.getTrackClientRect());this.isSliderDragging=!0,requestAnimationFrame((function(){return n.updatePosition(t,o)}))}}},{key:"handleTrackDrag",value:function(e,t){if(!this.props.disabled&&this.props.draggableTrack&&!this.isSliderDragging){var n=this.props,o=n.maxValue,r=n.minValue,a=n.value,i=a.max,u=a.min,l=s.getPositionFromEvent(e,this.getTrackClientRect()),p=s.getValueFromPosition(l,r,o,this.getTrackClientRect()),c=s.getStepValueFromValue(p,this.props.step),d=s.getPositionFromEvent(t,this.getTrackClientRect()),f=s.getValueFromPosition(d,r,o,this.getTrackClientRect()),h=s.getStepValueFromValue(f,this.props.step)-c,m={min:u-h,max:i-h};this.updateValues(m)}}},{key:"handleSliderKeyDown",value:function(e,t){if(!this.props.disabled)switch(e.keyCode){case y.LEFT_ARROW:case y.DOWN_ARROW:e.preventDefault(),this.decrementValue(t);break;case y.RIGHT_ARROW:case y.UP_ARROW:e.preventDefault(),this.incrementValue(t)}}},{key:"handleTrackMouseDown",value:function(e,t){if(!this.props.disabled){var n=this.props,o=n.maxValue,r=n.minValue,a=n.value,i=a.max,u=a.min;e.preventDefault();var l=s.getValueFromPosition(t,r,o,this.getTrackClientRect()),p=s.getStepValueFromValue(l,this.props.step);(!this.props.draggableTrack||p>i||p<u)&&this.updatePosition(this.getKeyByPosition(t),t)}}},{key:"handleInteractionStart",value:function(){this.props.onChangeStart&&this.props.onChangeStart(this.props.value),this.props.onChangeComplete&&!(0,m.isDefined)(this.startValue)&&(this.startValue=this.props.value)}},{key:"handleInteractionEnd",value:function(){this.isSliderDragging&&(this.isSliderDragging=!1),this.props.onChangeComplete&&(0,m.isDefined)(this.startValue)&&(this.startValue!==this.props.value&&this.props.onChangeComplete(this.props.value),this.startValue=null)}},{key:"handleKeyDown",value:function(e){this.handleInteractionStart(e)}},{key:"handleKeyUp",value:function(e){this.handleInteractionEnd(e)}},{key:"handleMouseDown",value:function(e){this.handleInteractionStart(e),this.addDocumentMouseUpListener()}},{key:"handleMouseUp",value:function(e){this.handleInteractionEnd(e),this.removeDocumentMouseUpListener()}},{key:"handleTouchStart",value:function(e){this.handleInteractionStart(e),this.addDocumentTouchEndListener()}},{key:"handleTouchEnd",value:function(e){this.handleInteractionEnd(e),this.removeDocumentTouchEndListener()}},{key:"renderSliders",value:function(){var e=this,t=s.getValueFromProps(this.props,this.isMultiValue()),n=s.getPercentagesFromValues(t,this.props.minValue,this.props.maxValue);return(this.props.allowSameValues&&"min"===this.lastKeyMoved?this.getKeys().reverse():this.getKeys()).map((function(o){var r=t[o],i=n[o],u=e.props,s=u.maxValue,l=u.minValue;return"min"===o?s=t.max:l=t.min,a.default.createElement(f.default,{ariaLabelledby:e.props.ariaLabelledby,ariaControls:e.props.ariaControls,classNames:e.props.classNames,formatLabel:e.props.formatLabel,key:o,maxValue:s,minValue:l,onSliderDrag:e.handleSliderDrag,onSliderKeyDown:e.handleSliderKeyDown,percentage:i,type:o,value:r})}))}},{key:"renderHiddenInputs",value:function(){var e=this;if(!this.props.name)return[];var t=this.isMultiValue(),n=s.getValueFromProps(this.props,t);return this.getKeys().map((function(o){var r=n[o],i=t?""+e.props.name+(0,m.captialize)(o):e.props.name;return a.default.createElement("input",{key:o,type:"hidden",name:i,value:r})}))}},{key:"render",value:function(){var e=this,t=this.getComponentClassName(),n=s.getValueFromProps(this.props,this.isMultiValue()),o=s.getPercentagesFromValues(n,this.props.minValue,this.props.maxValue);return a.default.createElement("div",{"aria-disabled":this.props.disabled,ref:function(t){e.node=t},className:t,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart},a.default.createElement(p.default,{classNames:this.props.classNames,formatLabel:this.props.formatLabel,type:"min"},this.props.minValue),a.default.createElement(h.default,{classNames:this.props.classNames,draggableTrack:this.props.draggableTrack,ref:function(t){e.trackNode=t},percentages:o,onTrackDrag:this.handleTrackDrag,onTrackMouseDown:this.handleTrackMouseDown},this.renderSliders()),a.default.createElement(p.default,{classNames:this.props.classNames,formatLabel:this.props.formatLabel,type:"max"},this.props.maxValue),this.renderHiddenInputs())}}]),t}(a.default.Component),b(o.prototype,"handleSliderDrag",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleSliderDrag"),o.prototype),b(o.prototype,"handleTrackDrag",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleTrackDrag"),o.prototype),b(o.prototype,"handleSliderKeyDown",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleSliderKeyDown"),o.prototype),b(o.prototype,"handleTrackMouseDown",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleTrackMouseDown"),o.prototype),b(o.prototype,"handleInteractionStart",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleInteractionStart"),o.prototype),b(o.prototype,"handleInteractionEnd",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleInteractionEnd"),o.prototype),b(o.prototype,"handleKeyDown",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleKeyDown"),o.prototype),b(o.prototype,"handleKeyUp",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleKeyUp"),o.prototype),b(o.prototype,"handleMouseDown",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleMouseDown"),o.prototype),b(o.prototype,"handleMouseUp",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleMouseUp"),o.prototype),b(o.prototype,"handleTouchStart",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleTouchStart"),o.prototype),b(o.prototype,"handleTouchEnd",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleTouchEnd"),o.prototype),o);t.default=g,e.exports=t.default},6878:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.DOWN_ARROW=40,t.LEFT_ARROW=37,t.RIGHT_ARROW=39,t.UP_ARROW=38},9191:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=a(n(7294)),r=a(n(5697));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.formatLabel?e.formatLabel(e.children,e.type):e.children;return o.default.createElement("span",{className:e.classNames[e.type+"Label"]},o.default.createElement("span",{className:e.classNames.labelContainer},t))}i.propTypes={children:r.default.node.isRequired,classNames:r.default.objectOf(r.default.string).isRequired,formatLabel:r.default.func,type:r.default.string.isRequired},e.exports=t.default},2807:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.maxValue,n=e.minValue;if(!(0,o.isNumber)(n)||!(0,o.isNumber)(t))return new Error('"minValue" and "maxValue" must be a number');if(n>=t)return new Error('"minValue" must be smaller than "maxValue"')};var o=n(8302);e.exports=t.default},2737:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=l(n(7294)),i=l(n(5697)),u=l(n(6474)),s=l(n(9191));function l(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n,o,r){var a={};return Object.keys(o).forEach((function(e){a[e]=o[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,o){return o(e,t,n)||n}),a),r&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(r):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var c=(o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.node=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,null,[{key:"propTypes",get:function(){return{ariaLabelledby:i.default.string,ariaControls:i.default.string,classNames:i.default.objectOf(i.default.string).isRequired,formatLabel:i.default.func,maxValue:i.default.number,minValue:i.default.number,onSliderDrag:i.default.func.isRequired,onSliderKeyDown:i.default.func.isRequired,percentage:i.default.number.isRequired,type:i.default.string.isRequired,value:i.default.number.isRequired}}}]),r(t,[{key:"componentWillUnmount",value:function(){this.removeDocumentMouseMoveListener(),this.removeDocumentMouseUpListener(),this.removeDocumentTouchEndListener(),this.removeDocumentTouchMoveListener()}},{key:"getStyle",value:function(){return{position:"absolute",left:100*(this.props.percentage||0)+"%"}}},{key:"addDocumentMouseMoveListener",value:function(){this.removeDocumentMouseMoveListener(),this.node.ownerDocument.addEventListener("mousemove",this.handleMouseMove)}},{key:"addDocumentMouseUpListener",value:function(){this.removeDocumentMouseUpListener(),this.node.ownerDocument.addEventListener("mouseup",this.handleMouseUp)}},{key:"addDocumentTouchMoveListener",value:function(){this.removeDocumentTouchMoveListener(),this.node.ownerDocument.addEventListener("touchmove",this.handleTouchMove)}},{key:"addDocumentTouchEndListener",value:function(){this.removeDocumentTouchEndListener(),this.node.ownerDocument.addEventListener("touchend",this.handleTouchEnd)}},{key:"removeDocumentMouseMoveListener",value:function(){this.node.ownerDocument.removeEventListener("mousemove",this.handleMouseMove)}},{key:"removeDocumentMouseUpListener",value:function(){this.node.ownerDocument.removeEventListener("mouseup",this.handleMouseUp)}},{key:"removeDocumentTouchMoveListener",value:function(){this.node.ownerDocument.removeEventListener("touchmove",this.handleTouchMove)}},{key:"removeDocumentTouchEndListener",value:function(){this.node.ownerDocument.removeEventListener("touchend",this.handleTouchEnd)}},{key:"handleMouseDown",value:function(){this.addDocumentMouseMoveListener(),this.addDocumentMouseUpListener()}},{key:"handleMouseUp",value:function(){this.removeDocumentMouseMoveListener(),this.removeDocumentMouseUpListener()}},{key:"handleMouseMove",value:function(e){this.props.onSliderDrag(e,this.props.type)}},{key:"handleTouchStart",value:function(){this.addDocumentTouchEndListener(),this.addDocumentTouchMoveListener()}},{key:"handleTouchMove",value:function(e){this.props.onSliderDrag(e,this.props.type)}},{key:"handleTouchEnd",value:function(){this.removeDocumentTouchMoveListener(),this.removeDocumentTouchEndListener()}},{key:"handleKeyDown",value:function(e){this.props.onSliderKeyDown(e,this.props.type)}},{key:"render",value:function(){var e=this,t=this.getStyle();return a.default.createElement("span",{className:this.props.classNames.sliderContainer,ref:function(t){e.node=t},style:t},a.default.createElement(s.default,{classNames:this.props.classNames,formatLabel:this.props.formatLabel,type:"value"},this.props.value),a.default.createElement("div",{"aria-labelledby":this.props.ariaLabelledby,"aria-controls":this.props.ariaControls,"aria-valuemax":this.props.maxValue,"aria-valuemin":this.props.minValue,"aria-valuenow":this.props.value,className:this.props.classNames.slider,draggable:"false",onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,role:"slider",tabIndex:"0"}))}}]),t}(a.default.Component),p(o.prototype,"handleMouseDown",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleMouseDown"),o.prototype),p(o.prototype,"handleMouseUp",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleMouseUp"),o.prototype),p(o.prototype,"handleMouseMove",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleMouseMove"),o.prototype),p(o.prototype,"handleTouchStart",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleTouchStart"),o.prototype),p(o.prototype,"handleTouchMove",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleTouchMove"),o.prototype),p(o.prototype,"handleTouchEnd",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleTouchEnd"),o.prototype),p(o.prototype,"handleKeyDown",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleKeyDown"),o.prototype),o);t.default=c,e.exports=t.default},752:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=s(n(7294)),i=s(n(5697)),u=s(n(6474));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,o,r){var a={};return Object.keys(o).forEach((function(e){a[e]=o[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,o){return o(e,t,n)||n}),a),r&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(r):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var p=(o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.node=null,n.trackDragEvent=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,null,[{key:"propTypes",get:function(){return{children:i.default.node.isRequired,classNames:i.default.objectOf(i.default.string).isRequired,draggableTrack:i.default.bool,onTrackDrag:i.default.func,onTrackMouseDown:i.default.func.isRequired,percentages:i.default.objectOf(i.default.number).isRequired}}}]),r(t,[{key:"getClientRect",value:function(){return this.node.getBoundingClientRect()}},{key:"getActiveTrackStyle",value:function(){var e=100*(this.props.percentages.max-this.props.percentages.min)+"%";return{left:100*this.props.percentages.min+"%",width:e}}},{key:"addDocumentMouseMoveListener",value:function(){this.removeDocumentMouseMoveListener(),this.node.ownerDocument.addEventListener("mousemove",this.handleMouseMove)}},{key:"addDocumentMouseUpListener",value:function(){this.removeDocumentMouseUpListener(),this.node.ownerDocument.addEventListener("mouseup",this.handleMouseUp)}},{key:"removeDocumentMouseMoveListener",value:function(){this.node.ownerDocument.removeEventListener("mousemove",this.handleMouseMove)}},{key:"removeDocumentMouseUpListener",value:function(){this.node.ownerDocument.removeEventListener("mouseup",this.handleMouseUp)}},{key:"handleMouseMove",value:function(e){this.props.draggableTrack&&(null!==this.trackDragEvent&&this.props.onTrackDrag(e,this.trackDragEvent),this.trackDragEvent=e)}},{key:"handleMouseUp",value:function(){this.props.draggableTrack&&(this.removeDocumentMouseMoveListener(),this.removeDocumentMouseUpListener(),this.trackDragEvent=null)}},{key:"handleMouseDown",value:function(e){var t={x:(e.touches?e.touches[0].clientX:e.clientX)-this.getClientRect().left,y:0};this.props.onTrackMouseDown(e,t),this.props.draggableTrack&&(this.addDocumentMouseMoveListener(),this.addDocumentMouseUpListener())}},{key:"handleTouchStart",value:function(e){e.preventDefault(),this.handleMouseDown(e)}},{key:"render",value:function(){var e=this,t=this.getActiveTrackStyle();return a.default.createElement("div",{className:this.props.classNames.track,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,ref:function(t){e.node=t}},a.default.createElement("div",{style:t,className:this.props.classNames.activeTrack}),this.props.children)}}]),t}(a.default.Component),l(o.prototype,"handleMouseMove",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleMouseMove"),o.prototype),l(o.prototype,"handleMouseUp",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleMouseUp"),o.prototype),l(o.prototype,"handleMouseDown",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleMouseDown"),o.prototype),l(o.prototype,"handleTouchStart",[u.default],Object.getOwnPropertyDescriptor(o.prototype,"handleTouchStart"),o.prototype),o);t.default=p,e.exports=t.default},2097:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.maxValue,r=e.minValue,a=e[t];if(!(0,o.isNumber)(a)&&(!(0,o.isObject)(a)||!(0,o.isNumber)(a.min)||!(0,o.isNumber)(a.max)))return new Error('"'+t+'" must be a number or a range object');if((0,o.isNumber)(a)&&(a<r||a>n))return new Error('"'+t+'" must be in between "minValue" and "maxValue"');if((0,o.isObject)(a)&&(a.min<r||a.min>n||a.max<r||a.max>n))return new Error('"'+t+'" must be in between "minValue" and "maxValue"')};var o=n(8302);e.exports=t.default},3232:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.getPercentageFromPosition=a,t.getValueFromPosition=function(e,t,n,o){var r=a(e,o);return t+(n-t)*r},t.getValueFromProps=function(e,t){if(t)return o({},e.value);return{min:e.minValue,max:e.value}},t.getPercentageFromValue=i,t.getPercentagesFromValues=function(e,t,n){return{min:i(e.min,t,n),max:i(e.max,t,n)}},t.getPositionFromValue=u,t.getPositionsFromValues=function(e,t,n,o){return{min:u(e.min,t,n,o),max:u(e.max,t,n,o)}},t.getPositionFromEvent=function(e,t){var n=t.width,o=(e.touches?e.touches[0]:e).clientX;return{x:(0,r.clamp)(o-t.left,0,n),y:0}},t.getStepValueFromValue=function(e,t){return Math.round(e/t)*t};var r=n(8302);function a(e,t){var n=t.width;return e.x/n||0}function i(e,t,n){return((0,r.clamp)(e,t,n)-t)/(n-t)||0}function u(e,t,n,o){var r=o.width;return{x:i(e,t,n)*r,y:0}}},2939:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},e.exports=t.default},2426:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return Math.min(Math.max(e,t),n)},e.exports=t.default},9588:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=Math.pow(t.x-e.x,2),o=Math.pow(t.y-e.y,2);return Math.sqrt(n+o)},e.exports=t.default},8302:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n(2939);Object.defineProperty(t,"captialize",{enumerable:!0,get:function(){return p(o).default}});var r=n(2426);Object.defineProperty(t,"clamp",{enumerable:!0,get:function(){return p(r).default}});var a=n(9588);Object.defineProperty(t,"distanceTo",{enumerable:!0,get:function(){return p(a).default}});var i=n(2330);Object.defineProperty(t,"isDefined",{enumerable:!0,get:function(){return p(i).default}});var u=n(49);Object.defineProperty(t,"isNumber",{enumerable:!0,get:function(){return p(u).default}});var s=n(1344);Object.defineProperty(t,"isObject",{enumerable:!0,get:function(){return p(s).default}});var l=n(1359);function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"length",{enumerable:!0,get:function(){return p(l).default}})},2330:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return void 0!==e&&null!==e},e.exports=t.default},49:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"number"===typeof e},e.exports=t.default},1344:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return null!==e&&"object"===("undefined"===typeof e?"undefined":n(e))},e.exports=t.default},1359:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return Math.abs(e-t)},e.exports=t.default}}]);