(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{202:function(e){e.exports={id:0,name:"@rmwc/linear-progress",kind:0,flags:{},children:[{id:1,name:'"index"',kind:1,kindString:"External module",flags:{isExported:!0},originalName:"/Users/jamesmfriedman/Sites/rmwc/src/linear-progress/index.tsx",children:[{id:9,name:"LinearProgress",kind:128,kindString:"Class",flags:{isExported:!0},typeParameter:[{id:24,name:"S",kind:131072,kindString:"Type parameter",flags:{},type:{type:"intrinsic",name:"any"}},{id:59,name:"SS",kind:131072,kindString:"Type parameter",flags:{}}],children:[{id:31,name:"constructor",kind:512,kindString:"Constructor",flags:{isExported:!0},signatures:[{id:32,name:"new LinearProgress",kind:16384,kindString:"Constructor signature",flags:{},parameters:[{id:33,name:"props",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"any"}}],type:{type:"reference",name:"LinearProgress",id:9},inheritedFrom:{type:"reference",name:"FoundationComponent.__constructor"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:206,character:64}],inheritedFrom:{type:"reference",name:"FoundationComponent.__constructor"}},{id:15,name:"determinate",kind:1024,kindString:"Property",flags:{isExported:!0},sources:[{fileName:"index.tsx",line:80,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"boolean"},{type:"intrinsic",name:"null"}]},defaultValue:" null"},{id:27,name:"elements",kind:1024,kindString:"Property",flags:{isExported:!0},sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:206,character:10}],type:{type:"reflection",declaration:{id:28,name:"__type",kind:65536,kindString:"Type literal",flags:{},indexSignature:[{id:29,name:"__index",kind:8192,kindString:"Index signature",flags:{},parameters:[{id:30,name:"key",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"string"}}],type:{type:"reference",name:"FoundationElement",typeArguments:[{type:"intrinsic",name:"any"},{type:"intrinsic",name:"any"}]}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:206,character:11}]}},inheritedFrom:{type:"reference",name:"FoundationComponent.elements"}},{id:26,name:"foundation",kind:1024,kindString:"Property",flags:{isExported:!0},sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:205,character:12}],type:{type:"intrinsic",name:"any"},defaultValue:" this.getDefaultFoundation()",inheritedFrom:{type:"reference",name:"FoundationComponent.foundation"}},{id:10,name:"displayName",kind:1024,kindString:"Property",flags:{isStatic:!0,isExported:!0},sources:[{fileName:"index.tsx",line:71,character:20}],type:{type:"intrinsic",name:"string"},defaultValue:'"LinearProgress"'},{id:25,name:"shouldDebounce",kind:1024,kindString:"Property",flags:{isStatic:!0,isExported:!0},sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:203,character:23}],type:{type:"intrinsic",name:"boolean"},defaultValue:"false",inheritedFrom:{type:"reference",name:"FoundationComponent.shouldDebounce"}},{id:75,name:"UNSAFE_componentWillMount",kind:2048,kindString:"Method",flags:{isExported:!0,isOptional:!0},signatures:[{id:76,name:"UNSAFE_componentWillMount",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.",text:"This method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n",tags:[{tag:"deprecated",text:"16.3, use componentDidMount or the constructor instead"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path\n"}]},type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.UNSAFE_componentWillMount"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/node_modules/@types/react/index.d.ts",line:610,character:33}],inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.UNSAFE_componentWillMount"}},{id:81,name:"UNSAFE_componentWillReceiveProps",kind:2048,kindString:"Method",flags:{isExported:!0,isOptional:!0},signatures:[{id:82,name:"UNSAFE_componentWillReceiveProps",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.",text:"Calling `Component#setState` generally does not trigger this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n",tags:[{tag:"deprecated",text:"16.3, use static getDerivedStateFromProps instead"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path\n"}]},parameters:[{id:83,name:"nextProps",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationPropsT",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"DeprecatedLinearProgressProps",id:7}]}]}]}},{id:84,name:"nextContext",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"any"}}],type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.UNSAFE_componentWillReceiveProps"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/node_modules/@types/react/index.d.ts",line:642,character:40}],inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.UNSAFE_componentWillReceiveProps"}},{id:90,name:"UNSAFE_componentWillUpdate",kind:2048,kindString:"Method",flags:{isExported:!0,isOptional:!0},signatures:[{id:91,name:"UNSAFE_componentWillUpdate",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Called immediately before rendering when new props or state is received. Not called for the initial render.",text:"Note: You cannot call `Component#setState` here.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n",tags:[{tag:"deprecated",text:"16.3, use getSnapshotBeforeUpdate instead"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path\n"}]},parameters:[{id:92,name:"nextProps",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationPropsT",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"DeprecatedLinearProgressProps",id:7}]}]}]}},{id:93,name:"nextState",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationStateT",typeArguments:[{type:"typeParameter",name:"S",constraint:{type:"intrinsic",name:"any"}}]}]}},{id:94,name:"nextContext",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"any"}}],type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.UNSAFE_componentWillUpdate"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/node_modules/@types/react/index.d.ts",line:670,character:34}],inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.UNSAFE_componentWillUpdate"}},{id:65,name:"componentDidCatch",kind:2048,kindString:"Method",flags:{isExported:!0,isOptional:!0},signatures:[{id:66,name:"componentDidCatch",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount."},parameters:[{id:67,name:"error",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Error"}},{id:68,name:"errorInfo",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"ErrorInfo"}}],type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"ComponentLifecycle.componentDidCatch"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/node_modules/@types/react/index.d.ts",line:539,character:25}],inheritedFrom:{type:"reference",name:"ComponentLifecycle.componentDidCatch"}},{id:34,name:"componentDidMount",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:35,name:"componentDidMount",kind:4096,kindString:"Call signature",flags:{},type:{type:"intrinsic",name:"void"},overwrites:{type:"reference",name:"ComponentLifecycle.componentDidMount"},inheritedFrom:{type:"reference",name:"FoundationComponent.componentDidMount"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:218,character:19}],overwrites:{type:"reference",name:"ComponentLifecycle.componentDidMount"},inheritedFrom:{type:"reference",name:"FoundationComponent.componentDidMount"}},{id:36,name:"componentDidUpdate",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:37,name:"componentDidUpdate",kind:4096,kindString:"Call signature",flags:{},parameters:[{id:38,name:"prevProps",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"FoundationPropsT",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"DeprecatedLinearProgressProps",id:7}]}]}}],type:{type:"intrinsic",name:"void"},overwrites:{type:"reference",name:"NewLifecycle.componentDidUpdate"},inheritedFrom:{type:"reference",name:"FoundationComponent.componentDidUpdate"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:223,character:20}],overwrites:{type:"reference",name:"NewLifecycle.componentDidUpdate"},inheritedFrom:{type:"reference",name:"FoundationComponent.componentDidUpdate"}},{id:73,name:"componentWillMount",kind:2048,kindString:"Method",flags:{isExported:!0,isOptional:!0},signatures:[{id:74,name:"componentWillMount",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.",text:"Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n",tags:[{tag:"deprecated",text:"16.3, use componentDidMount or the constructor instead; will stop working in React 17"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path\n"}]},type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.componentWillMount"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/node_modules/@types/react/index.d.ts",line:596,character:26}],inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.componentWillMount"}},{id:77,name:"componentWillReceiveProps",kind:2048,kindString:"Method",flags:{isExported:!0,isOptional:!0},signatures:[{id:78,name:"componentWillReceiveProps",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.",text:"Calling `Component#setState` generally does not trigger this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n",tags:[{tag:"deprecated",text:"16.3, use static getDerivedStateFromProps instead; will stop working in React 17"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path\n"}]},parameters:[{id:79,name:"nextProps",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationPropsT",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"DeprecatedLinearProgressProps",id:7}]}]}]}},{id:80,name:"nextContext",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"any"}}],type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.componentWillReceiveProps"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/node_modules/@types/react/index.d.ts",line:625,character:33}],inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.componentWillReceiveProps"}},{id:39,name:"componentWillUnmount",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:40,name:"componentWillUnmount",kind:4096,kindString:"Call signature",flags:{},type:{type:"intrinsic",name:"void"},overwrites:{type:"reference",name:"ComponentLifecycle.componentWillUnmount"},inheritedFrom:{type:"reference",name:"FoundationComponent.componentWillUnmount"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:227,character:22}],overwrites:{type:"reference",name:"ComponentLifecycle.componentWillUnmount"},inheritedFrom:{type:"reference",name:"FoundationComponent.componentWillUnmount"}},{id:85,name:"componentWillUpdate",kind:2048,kindString:"Method",flags:{isExported:!0,isOptional:!0},signatures:[{id:86,name:"componentWillUpdate",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Called immediately before rendering when new props or state is received. Not called for the initial render.",text:"Note: You cannot call `Component#setState` here.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n",tags:[{tag:"deprecated",text:"16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"},{tag:"see",text:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path\n"}]},parameters:[{id:87,name:"nextProps",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationPropsT",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"DeprecatedLinearProgressProps",id:7}]}]}]}},{id:88,name:"nextState",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationStateT",typeArguments:[{type:"typeParameter",name:"S",constraint:{type:"intrinsic",name:"any"}}]}]}},{id:89,name:"nextContext",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"any"}}],type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.componentWillUpdate"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/node_modules/@types/react/index.d.ts",line:655,character:27}],inheritedFrom:{type:"reference",name:"DeprecatedLifecycle.componentWillUpdate"}},{id:41,name:"createElement",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:42,name:"createElement",kind:4096,kindString:"Call signature",flags:{},typeParameter:[{id:43,name:"ElementType",kind:131072,kindString:"Type parameter",flags:{},type:{type:"intrinsic",name:"any"}}],parameters:[{id:44,name:"elementName",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"string"}}],type:{type:"reference",name:"FoundationElement",typeArguments:[{type:"unknown",name:"ExtractProps<ElementType>"},{type:"unknown",name:"ElementType"}]},inheritedFrom:{type:"reference",name:"FoundationComponent.createElement"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:233,character:15}],inheritedFrom:{type:"reference",name:"FoundationComponent.createElement"}},{id:54,name:"emit",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:55,name:"emit",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Fires a cross-browser-compatible custom event from the component root of the given type,"},parameters:[{id:56,name:"evtType",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"string"}},{id:57,name:"evtData",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Object"}},{id:58,name:"shouldBubble",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"boolean"},defaultValue:"false"}],type:{type:"reference",name:"CustomEvent",typeArguments:[{type:"reference",name:"Object"}]},inheritedFrom:{type:"reference",name:"FoundationComponent.emit"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:267,character:6}],inheritedFrom:{type:"reference",name:"FoundationComponent.emit"}},{id:16,name:"getDefaultFoundation",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:17,name:"getDefaultFoundation",kind:4096,kindString:"Call signature",flags:{},type:{type:"intrinsic",name:"any"},overwrites:{type:"reference",name:"FoundationComponent.getDefaultFoundation"}}],sources:[{fileName:"index.tsx",line:82,character:22}],overwrites:{type:"reference",name:"FoundationComponent.getDefaultFoundation"}},{id:69,name:"getSnapshotBeforeUpdate",kind:2048,kindString:"Method",flags:{isExported:!0,isOptional:!0},signatures:[{id:70,name:"getSnapshotBeforeUpdate",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Runs before React applies the result of `render` to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before `render` causes changes to it.",text:"Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.\n"},parameters:[{id:71,name:"prevProps",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationPropsT",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"DeprecatedLinearProgressProps",id:7}]}]}]}},{id:72,name:"prevState",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationStateT",typeArguments:[{type:"typeParameter",name:"S",constraint:{type:"intrinsic",name:"any"}}]}]}}],type:{type:"union",types:[{type:"typeParameter",name:"SS"},{type:"intrinsic",name:"null"}]},inheritedFrom:{type:"reference",name:"NewLifecycle.getSnapshotBeforeUpdate"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/node_modules/@types/react/index.d.ts",line:575,character:31}],inheritedFrom:{type:"reference",name:"NewLifecycle.getSnapshotBeforeUpdate"}},{id:22,name:"render",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:23,name:"render",kind:4096,kindString:"Call signature",flags:{},type:{type:"reference",name:"Element"}}],sources:[{fileName:"index.tsx",line:143,character:8}]},{id:60,name:"shouldComponentUpdate",kind:2048,kindString:"Method",flags:{isExported:!0,isOptional:!0},signatures:[{id:61,name:"shouldComponentUpdate",kind:4096,kindString:"Call signature",flags:{},comment:{shortText:"Called to determine whether the change in props and state should trigger a re-render.",text:"`Component` always returns true.\n`PureComponent` implements a shallow comparison on props and state and returns true if any\nprops or states have changed.\n\nIf false is returned, `Component#render`, `componentWillUpdate`\nand `componentDidUpdate` will not be called.\n"},parameters:[{id:62,name:"nextProps",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationPropsT",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"DeprecatedLinearProgressProps",id:7}]}]}]}},{id:63,name:"nextState",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"Readonly",typeArguments:[{type:"reference",name:"FoundationStateT",typeArguments:[{type:"typeParameter",name:"S",constraint:{type:"intrinsic",name:"any"}}]}]}},{id:64,name:"nextContext",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"any"}}],type:{type:"intrinsic",name:"boolean"},inheritedFrom:{type:"reference",name:"ComponentLifecycle.shouldComponentUpdate"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/node_modules/@types/react/index.d.ts",line:529,character:29}],inheritedFrom:{type:"reference",name:"ComponentLifecycle.shouldComponentUpdate"}},{id:18,name:"sync",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:19,name:"sync",kind:4096,kindString:"Call signature",flags:{},parameters:[{id:20,name:"props",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"LinearProgressProps",id:2}},{id:21,name:"prevProps",kind:32768,kindString:"Parameter",flags:{},type:{type:"reference",name:"LinearProgressProps",id:2}}],type:{type:"intrinsic",name:"void"},overwrites:{type:"reference",name:"FoundationComponent.sync"}}],sources:[{fileName:"index.tsx",line:105,character:6}],overwrites:{type:"reference",name:"FoundationComponent.sync"}},{id:47,name:"syncProp",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:48,name:"syncProp",kind:4096,kindString:"Call signature",flags:{},parameters:[{id:49,name:"prop",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"any"}},{id:50,name:"prevProp",kind:32768,kindString:"Parameter",flags:{},type:{type:"intrinsic",name:"any"}},{id:51,name:"callback",kind:32768,kindString:"Parameter",flags:{},type:{type:"reflection",declaration:{id:52,name:"__type",kind:65536,kindString:"Type literal",flags:{},signatures:[{id:53,name:"__call",kind:4096,kindString:"Call signature",flags:{},type:{type:"intrinsic",name:"void"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:248,character:46}]}}}],type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"FoundationComponent.syncProp"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:248,character:10}],inheritedFrom:{type:"reference",name:"FoundationComponent.syncProp"}},{id:45,name:"update",kind:2048,kindString:"Method",flags:{isExported:!0},signatures:[{id:46,name:"update",kind:4096,kindString:"Call signature",flags:{},type:{type:"intrinsic",name:"void"},inheritedFrom:{type:"reference",name:"FoundationComponent.update"}}],sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/base/foundation-component.tsx",line:242,character:8}],inheritedFrom:{type:"reference",name:"FoundationComponent.update"}},{id:11,name:"defaultProps",kind:2097152,kindString:"Object literal",flags:{isStatic:!0,isExported:!0},children:[{id:13,name:"buffer",kind:32,kindString:"Variable",flags:{isExported:!0},sources:[{fileName:"index.tsx",line:75,character:10}],type:{type:"intrinsic",name:"undefined"},defaultValue:" undefined"},{id:12,name:"progress",kind:32,kindString:"Variable",flags:{isExported:!0},sources:[{fileName:"index.tsx",line:74,character:12}],type:{type:"intrinsic",name:"undefined"},defaultValue:" undefined"},{id:14,name:"reversed",kind:32,kindString:"Variable",flags:{isExported:!0},sources:[{fileName:"index.tsx",line:76,character:12}],type:{type:"intrinsic",name:"boolean"},defaultValue:"false"}],groups:[{title:"Variables",kind:32,children:[13,12,14]}],sources:[{fileName:"index.tsx",line:73,character:21}],type:{type:"intrinsic",name:"object"}}],groups:[{title:"Constructors",kind:512,children:[31]},{title:"Properties",kind:1024,children:[15,27,26,10,25]},{title:"Methods",kind:2048,children:[75,81,90,65,34,36,73,77,39,85,41,54,16,69,22,60,18,47,45]},{title:"Object literals",kind:2097152,children:[11]}],sources:[{fileName:"index.tsx",line:68,character:27}],extendedTypes:[{type:"reference",name:"FoundationComponent",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"DeprecatedLinearProgressProps",id:7}]}]}]},{id:7,name:"DeprecatedLinearProgressProps",kind:256,kindString:"Interface",flags:{isExported:!0},children:[{id:8,name:"determinate",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"Whether or not the Progress bar is determinate."},sources:[{fileName:"index.tsx",line:24,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"undefined"},{type:"intrinsic",name:"false"},{type:"intrinsic",name:"true"}]}}],groups:[{title:"Properties",kind:1024,children:[8]}],sources:[{fileName:"index.tsx",line:22,character:46}]},{id:2,name:"LinearProgressProps",kind:256,kindString:"Interface",flags:{isExported:!0},children:[{id:4,name:"buffer",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"A Progress buffer float percentage between 0 and 1."},sources:[{fileName:"index.tsx",line:15,character:8}],type:{type:"union",types:[{type:"intrinsic",name:"number"},{type:"intrinsic",name:"string"}]}},{id:6,name:"closed",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"Hides the progress bar. Adding / removing this prop will trigger an animation in or out."},sources:[{fileName:"index.tsx",line:19,character:8}],type:{type:"union",types:[{type:"intrinsic",name:"undefined"},{type:"intrinsic",name:"false"},{type:"intrinsic",name:"true"}]}},{id:3,name:"progress",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"Progress float percentage between 0 and 1."},sources:[{fileName:"index.tsx",line:13,character:10}],type:{type:"union",types:[{type:"intrinsic",name:"number"},{type:"intrinsic",name:"string"}]}},{id:5,name:"reversed",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"Progress goes from right to left."},sources:[{fileName:"index.tsx",line:17,character:10}],type:{type:"union",types:[{type:"intrinsic",name:"undefined"},{type:"intrinsic",name:"false"},{type:"intrinsic",name:"true"}]}}],groups:[{title:"Properties",kind:1024,children:[4,6,3,5]}],sources:[{fileName:"index.tsx",line:11,character:36}]},{id:100,name:"LinearProgressBarInner",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},sources:[{fileName:"index.tsx",line:63,character:35}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'LinearProgressBarInner',\n  classNames: ['mdc-linear-progress__bar-inner']\n})"},{id:97,name:"LinearProgressBuffer",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},sources:[{fileName:"index.tsx",line:48,character:33}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'LinearProgressBuffer',\n  classNames: ['mdc-linear-progress__buffer']\n})"},{id:96,name:"LinearProgressBufferingDots",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},sources:[{fileName:"index.tsx",line:43,character:40}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'LinearProgressBufferingDots',\n  classNames: ['mdc-linear-progress__buffering-dots']\n})"},{id:98,name:"LinearProgressPrimaryBar",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},sources:[{fileName:"index.tsx",line:53,character:37}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'LinearProgressPrimaryBar',\n  classNames: ['mdc-linear-progress__bar mdc-linear-progress__primary-bar']\n})"},{id:95,name:"LinearProgressRoot",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},sources:[{fileName:"index.tsx",line:27,character:31}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"ComponentProps"}]},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"intersection",types:[{type:"reference",name:"LinearProgressProps",id:2},{type:"reference",name:"ComponentProps"}]}]}]},defaultValue:" componentFactory<LinearProgressProps>({\n  displayName: 'LinearProgressRoot',\n  tag: 'nav',\n  classNames: (props: LinearProgressProps) => [\n    'mdc-linear-progress',\n    {\n      'mdc-linear-progress--reversed': props.reversed,\n      'mdc-linear-progress--closed': props.closed\n    }\n  ],\n  defaultProps: {\n    role: 'progressbar'\n  },\n  consumeProps: ['determinate', 'reversed', 'accent', 'closed']\n})"},{id:99,name:"LinearProgressSecondaryBar",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},sources:[{fileName:"index.tsx",line:58,character:39}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'LinearProgressSecondaryBar',\n  classNames: ['mdc-linear-progress__bar mdc-linear-progress__secondary-bar']\n})"}],groups:[{title:"Classes",kind:128,children:[9]},{title:"Interfaces",kind:256,children:[7,2]},{title:"Variables",kind:32,children:[100,97,96,98,95,99]}],sources:[{fileName:"index.tsx",line:1,character:0}]}],groups:[{title:"External modules",kind:1,children:[1]}]}},238:function(e,n,t){"use strict";t.r(n),t.d(n,"attributes",function(){return g}),t.d(n,"default",function(){return y});var r=t(4),a=t(5),i=t(7),s=t(3),o=t(8),p=t(0),m=t.n(p),d=t(74),c=t(60),l=(t(202),t.t(202,1)),g={},y=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(s.a)(n).call(this,e))).state={},t}return Object(o.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("h1",null,"Linear Progress"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"Progress and activity indicators are visual indications of an app loading content.")),m.a.createElement("ul",null,m.a.createElement("li",null,"import from ",m.a.createElement("strong",null,"'@rmwc/linear-progress'"),";"),m.a.createElement("li",null,"Import styles:",m.a.createElement("ul",null,m.a.createElement("li",null,"import ",m.a.createElement("strong",null,"'@material/linear-progress/dist/mdc.linear-progress.css'"),";"))),m.a.createElement("li",null,"MDC Docs: ",m.a.createElement("a",{href:"https://material.io/develop/web/components/linear-progress/"},"https://material.io/develop/web/components/linear-progress/"))),m.a.createElement("div",{className:"example render-with-code"},m.a.createElement("div",{className:"run"},m.a.createElement(d.a,{progress:.5}),m.a.createElement(d.a,{progress:.6,buffer:.8}),m.a.createElement(d.a,null),m.a.createElement(d.a,{progress:.2,reversed:!0})),m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token keyword"},"import")," ",m.a.createElement("span",{className:"token punctuation"},"{")," LinearProgress ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'@rmwc/linear-progress'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"LinearProgress")," ",m.a.createElement("span",{className:"token attr-name"},"progress"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token number"},"0.5"),m.a.createElement("span",{className:"token punctuation"},"}"))," ",m.a.createElement("span",{className:"token punctuation"},"/>")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"LinearProgress")," ",m.a.createElement("span",{className:"token attr-name"},"progress"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token number"},"0.6"),m.a.createElement("span",{className:"token punctuation"},"}"))," ",m.a.createElement("span",{className:"token attr-name"},"buffer"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token number"},"0.8"),m.a.createElement("span",{className:"token punctuation"},"}")),m.a.createElement("span",{className:"token punctuation"},"/>")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"LinearProgress"),m.a.createElement("span",{className:"token punctuation"},"/>")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"LinearProgress")," ",m.a.createElement("span",{className:"token attr-name"},"progress"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token number"},"0.2"),m.a.createElement("span",{className:"token punctuation"},"}"))," ",m.a.createElement("span",{className:"token attr-name"},"reversed"),m.a.createElement("span",{className:"token punctuation"},"/>")),"\n")))),m.a.createElement("div",{className:"example render-only"},m.a.createElement("div",{className:"run"},m.a.createElement(c.a,{src:l,components:["LinearProgress"]}))))}}]),n}(m.a.Component)}}]);
//# sourceMappingURL=27.d9b2ddbc.chunk.js.map