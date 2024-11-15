import {Fragment, useMemo} from 'react';
import {Page} from 'components/Layout/Page';
import {MDXComponents} from 'components/MDX/MDXComponents';
import sidebarLearn from 'sidebarLearn.json';
import type {RouteItem} from 'components/Layout/getRouteMeta';
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from 'next';
import {ErrorDecoderContext} from 'components/ErrorDecoderContext';
import compileMDX from 'utils/compileMDX';

interface ErrorDecoderProps {
  errorCode: string | null;
  errorMessage: string | null;
  content: string;
  toc: string;
  meta: any;
}

export default function ErrorDecoderPage({
  errorMessage,
  errorCode,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const parsedContent = useMemo<React.ReactNode>(
    () => JSON.parse(content, reviveNodeOnClient),
    [content]
  );

  return (
    <ErrorDecoderContext.Provider value={{errorMessage, errorCode}}>
      <Page
        toc={[]}
        meta={{
          title: errorCode
            ? `Minified React error #${errorCode}`
            : 'Minified Error Decoder',
        }}
        routeTree={sidebarLearn as RouteItem}
        section="unknown">
        <div className="whitespace-pre-line">{parsedContent}</div>
        {/* <MaxWidth>
          <P>
            We highly recommend using the development build locally when debugging
            your app since it tracks additional debug info and provides helpful
            warnings about potential problems in your apps, but if you encounter
            an exception while using the production build, this page will
            reassemble the original error message.
          </P>
          <ErrorDecoder />
        </MaxWidth> */}
      </Page>
    </ErrorDecoderContext.Provider>
  );
}

// Deserialize a client React tree from JSON.
function reviveNodeOnClient(key: unknown, val: any) {
  if (Array.isArray(val) && val[0] == '$r') {
    // Assume it's a React element.
    let type = val[1];
    let key = val[2];
    let props = val[3];
    if (type === 'wrapper') {
      type = Fragment;
      props = {children: props.children};
    }
    if (type in MDXComponents) {
      type = MDXComponents[type as keyof typeof MDXComponents];
    }
    if (!type) {
      console.error('Unknown type: ' + type);
      type = Fragment;
    }
    return {
      $$typeof: Symbol.for('react.element'),
      type: type,
      key: key,
      ref: null,
      props: props,
      _owner: null,
    };
  } else {
    return val;
  }
}

/**
 * Next.js Page Router doesn't have a way to cache specific data fetching request.
 * But since Next.js uses limited number of workers, keep "cachedErrorCodes" as a
 * module level memory cache can reduce the number of requests down to once per worker.
 *
 * TODO: use `next/unstable_cache` when migrating to Next.js App Router
 */

export const getStaticProps: GetStaticProps<ErrorDecoderProps> = async ({
  params,
}) => {
  const errorCodes: {[key: string]: string} = {
    '0': 'Encountered an invalid child; DOM elements are not valid children of React components.',
    '1': 'update(): expected target of %s to be an array; got %s.',
    '2': 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?',
    '3': 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?',
    '4': 'Cannot have more than one key in an object with %s',
    '5': "update(): %s expects a spec of type 'object'; got %s",
    '6': "update(): %s expects a target of type 'object'; got %s",
    '7': 'Expected %s target to be an array; got %s',
    '8': 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?',
    '9': 'update(): expected spec of %s to be a function; got %s.',
    '10': 'instance must be a composite component',
    '11': 'TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.',
    '12': 'ReactShallowRenderer render(): Invalid component element.%s',
    '13': 'ReactShallowRenderer render(): Shallow rendering works only with custom components, not primitives (%s). Instead of calling `.render(el)` and inspecting the rendered output, look at `el.props` directly instead.',
    '14': 'TestUtils.Simulate expects a component instance and not a ReactElement.TestUtils.Simulate will not work if you are using shallow rendering.',
    '15': 'instance must be a composite component',
    '16': 'Do not override existing functions.',
    '17': 'All native instances should have a tag.',
    '18': 'Expected a component class, got %s.%s',
    '19': 'Expect a native root tag, instead got %s',
    '20': 'RawText "%s" must be wrapped in an explicit <Text> component.',
    '21': 'Argument is not a component (type: %s, keys: %s)',
    '22': 'Unable to find node handle for unmounted component.',
    '23': 'onlyChild must be passed a children with exactly one child.',
    '24': 'Mismatched list of contexts in callback queue',
    '25': 'Trying to release an instance into a pool of a different type.',
    '26': 'Unexpected node: %s',
    '27': 'Cannot initialize a transaction when there is already an outstanding transaction.',
    '28': 'Transaction.closeAll(): Cannot close transaction when none are open.',
    '29': 'Accumulated items must be not be null or undefined.',
    '30': 'Accumulated items must not be null or undefined.',
    '31': 'Objects are not valid as a React child (found: %s). If you meant to render a collection of children, use an array instead.',
    '32': 'Unable to find element with ID %s.',
    '33': 'getNodeFromInstance: Invalid argument.',
    '34': 'React DOM tree root should always have a node reference.',
    '35': 'isAncestor: Invalid argument.',
    '36': 'getParentInstance: Invalid argument.',
    '37': '_Target container is not a DOM element.',
    '38': 'parentComponent must be a valid React Component',
    '39': 'ReactDOM.render(): Invalid component element.%s',
    '40': 'Target container is not a DOM element.',
    '41': 'Target container is not valid.',
    '42': "You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s",
    '43': "You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.",
    '44': 'findDOMNode was called on an unmounted component.',
    '45': 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)',
    '46': 'renderToString(): You must pass a valid ReactElement.',
    '47': 'renderToStaticMarkup(): You must pass a valid ReactElement.',
    '48': "You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",
    '49': 'DOMProperty: Properties that have side effects must use property: %s',
    '50': 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s',
    '51': 'Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString for server rendering.',
    '52': 'Missing markup.',
    '53': 'Danger: Assigning to an already-occupied result index.',
    '54': 'Danger: Did not assign to every index of resultList.',
    '55': 'Danger: Expected markup to render %s nodes, but rendered %s.',
    '56': 'Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.',
    '57': 'Missing markup.',
    '58': 'Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().',
    '59': '%s is a void element tag and must not have `children` or use `props.dangerouslySetInnerHTML`.',
    '60': 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.',
    '61': '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.',
    '62': "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.",
    '63': 'Must be mounted to trap events',
    '64': 'Requires node to be rendered.',
    '65': 'Invalid tag: %s',
    '66': '<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.',
    '67': 'Missing closing comment for text component %s',
    '68': 'Expected devtool events to fire for the child before its parent includes it in onSetChildren().',
    '69': 'Expected onSetDisplayName() to fire for the child before its parent includes it in onSetChildren().',
    '70': 'Expected onSetChildren() or onSetText() to fire for the child before its parent includes it in onSetChildren().',
    '71': 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().',
    '72': 'Expected onSetParent() and onSetChildren() to be consistent (%s has parents %s and %s).',
    '73': 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',
    '74': 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
    '75': "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object.",
    '76': "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.",
    '77': 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',
    '78': 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
    '79': 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
    '80': 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.',
    '81': 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',
    '82': '%s.getInitialState(): must return an object or null',
    '83': 'Class specification must implement a `render` method.',
    '84': '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',
    '85': 'takes an object of state variables to update or a function which returns an object of state variables.',
    '86': 'SimpleEventPlugin: Unhandled event type, `%s`.',
    '87': "Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.",
    '88': "Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.",
    '89': "Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink",
    '90': 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.',
    '91': '`dangerouslySetInnerHTML` does not make sense on <textarea>.',
    '92': 'If you supply `defaultValue` on a <textarea>, do not pass children.',
    '93': '<textarea> can only have at most one child.',
    '94': 'Expected %s listener to be a function, instead got type %s',
    '95': 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.',
    '96': 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.',
    '97': 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.',
    '98': 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',
    '99': 'EventPluginRegistry: More than one plugin attempted to publish the same event name, `%s`.',
    '100':
      'EventPluginRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
    '101':
      'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.',
    '102':
      'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.',
    '103': 'Invalid `event`.',
    '104':
      'ReactCompositeComponent: injectEnvironment() can only be called once.',
    '105':
      'A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',
    '106': '%s.state: must be set to an object or null',
    '107':
      '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
    '108':
      '%s.getChildContext(): key "%s" is not defined in childContextTypes.',
    '109':
      '%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',
    '110': 'Stateless function components cannot have refs.',
    '111': 'There is no registered component for the tag %s',
    '112': 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',
    '113':
      'React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',
    '114':
      'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',
    '115': 'Cannot traverse from and to the same ID, `%s`.',
    '116':
      'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.',
    '117':
      'traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s',
    '118': 'updateTextContent called on non-empty component.',
    '119':
      "Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://react.dev/link/refs-must-have-owner).",
    '120':
      "Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://react.dev/link/refs-must-have-owner).",
    '121':
      'performUpdateIfNecessary: Unexpected batch number (current %s, pending %s)',
    '122':
      '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
    '123':
      'ReactUpdates: must inject a reconcile transaction class and batching strategy',
    '124':
      "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",
    '125':
      "ReactUpdates.asap: Can't enqueue an asap callback in a context where updates are not being batched.",
    '126': 'ReactUpdates: must provide a reconcile transaction class',
    '127': 'ReactUpdates: must provide a batching strategy',
    '128': 'ReactUpdates: must provide a batchedUpdates() function',
    '129': 'ReactUpdates: must provide an isBatchingUpdates boolean attribute',
    '130':
      'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
    '131': 'Encountered invalid React node of type %s',
    '132': 'Ended a touch event which was not counted in trackedTouchCount.',
    '133': 'Touch object is missing identifier',
    '134': 'Touch data should have been recorded on start',
    '135': 'Cannot find single active touch',
    '136':
      'Attempted to update component `%s` that has already been unmounted (or failed to mount).',
    '137':
      '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
    '138': 'Touch object is missing identifier.',
    '139': "ReactTestRenderer: .update() can't be called after unmount.",
    '140':
      'Expected hook events to fire for the child before its parent includes it in onSetChildren().',
    '141':
      'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().',
    '142':
      'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).',
    '143':
      'React.Children.only expected to receive a single React element child.',
    '144': 'Item must have been set',
    '145':
      'hostContainerInfo should be populated before getPublicInstance is called.',
    '146':
      'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.',
    '147':
      'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.',
    '148': 'Expected ref to be a function or a string.',
    '149':
      'Element ref was specified as a string (%s) but no owner was set. You may have multiple copies of React loaded. (details: https://react.dev/link/refs-must-have-owner).',
    '150':
      'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.',
    '151': 'An iterable object provided no iterator.',
    '152':
      'Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.',
    '153': 'Resuming work not yet implemented.',
    '154':
      'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.',
    '155':
      'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.',
    '156':
      'Unknown unit of work tag (%s). This error is likely caused by a bug in React. Please file an issue.',
    '157':
      'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.',
    '158':
      'There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.',
    '159':
      'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.',
    '160':
      'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.',
    '161':
      'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.',
    '162':
      'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.',
    '163':
      'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.',
    '164': 'A coroutine cannot have host component children.',
    '165':
      'Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.',
    '166':
      'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.',
    '167':
      'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.',
    '168':
      'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.',
    '169':
      'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.',
    '170':
      'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.',
    '171':
      'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.',
    '172': 'The custom dialog was already injected.',
    '173': 'Injected showDialog() must be a function.',
    '174':
      'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.',
    '175':
      'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.',
    '176':
      'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.',
    '177':
      'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.',
    '178':
      'Should have next effect. This error is likely caused by a bug in React. Please file an issue.',
    '179':
      'Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.',
    '180':
      'Commit phase errors should be scheduled to recover with task priority. This error is likely caused by a bug in React. Please file an issue.',
    '181':
      'Switch statement should be exhaustive. This error is likely caused by a bug in React. Please file an issue.',
    '182':
      'performWork was called recursively. This error is likely caused by a bug in React. Please file an issue.',
    '183':
      'Should have found an error boundary. This error is likely caused by a bug in React. Please file an issue.',
    '184':
      'No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.',
    '185':
      'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.',
    '186':
      'Task updates can only be scheduled as a nested update or inside batchedUpdates.',
    '187':
      'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.',
    '188': 'Unable to find node on an unmounted component.',
    '189':
      'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.',
    '190':
      "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
    '191':
      'Invalid argument passed as callback. Expected a function. Instead received: %s',
    '192':
      'React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers.',
    '193':
      'The server renderer does not implement support for array children yet.',
    '194':
      'Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.',
    '195':
      'The internal instance must be a React host component. This error is likely caused by a bug in React. Please file an issue.',
    '196': 'Missing injection for fiber getContextForSubtree',
    '197': 'Injected invokeGuardedCallback() must be a function.',
    '198':
      'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.',
    '199': 'Fiber owners should not show up in Stack stack traces.',
    '200': 'Target container is not a DOM element.',
    '201':
      "ReactDOM.render(): Invalid component element. Instead of passing a string like 'div', pass React.createElement('div') or <div />.",
    '202':
      'ReactDOM.render(): Invalid component element. Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.',
    '203':
      'ReactDOM.render(): Invalid component element. This may be caused by unintentionally loading two independent copies of React.',
    '204': 'ReactDOM.render(): Invalid component element.',
    '205': 'renderToNodeStream(): Invalid component element.',
    '206': 'renderToStaticNodeStream(): Invalid component element.',
    '207':
      'ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.',
    '208':
      'ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.',
    '209': 'renderToString(): Invalid component element.',
    '210': 'renderToStaticMarkup(): Invalid component element.',
    '211': 'Missing injection for fiber findDOMNode',
    '212': 'Missing injection for stack findDOMNode',
    '213': 'Element appears to be neither ReactComponent nor DOMNode. Keys: %s',
    '214': 'toTree() does not yet know how to handle nodes with tag=%s',
    '215': 'something went wrong',
    '216': 'Text children should already be flattened.',
    '217': 'ReactART does not support the type "%s"',
    '218': 'ReactART: Can not insert node before itself',
    '219': 'getInspectorDataForViewTag() is not available in production',
    '220': 'Container does not support insertBefore operation',
    '221': 'Tried to register two views with the same name %s',
    '222': 'View config not found for name %s',
    '224':
      "Can't read from currently-mounting component. This error is likely caused by a bug in React. Please file an issue.",
    '225':
      'Unexpected object passed to ReactTestInstance constructor (tag: %s). This is probably a bug in React.',
    '226':
      'Unsupported component type %s in test renderer. This is probably a bug in React.',
    '227':
      'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.',
    '228':
      'TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.',
    '229':
      'TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.',
    '230':
      "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.unstable_createPortal).",
    '231':
      'Expected `%s` listener to be a function, instead got a value of `%s` type.',
    '232':
      "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).",
    '233': 'Unsupported top level event type "%s" dispatched',
    '234': 'Event cannot be both direct and bubbling: %s',
    '235': 'Persistent reconciler is disabled.',
    '236': 'Noop reconciler is disabled.',
    '237': 'Mutating reconciler is disabled.',
    '238':
      'Task updates can only be scheduled as a nested update or inside batchedUpdates. This error is likely caused by a bug in React. Please file an issue.',
    '239': 'Measure not implemented yet',
    '240': 'Text components are not supported for now.',
    '241': 'Text components are not yet supported.',
    '242':
      '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
    '243':
      'renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.',
    '244':
      'Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue.',
    '245':
      'performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.',
    '246':
      'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.',
    '247': 'A call cannot have host component children.',
    '248': 'Not implemented.',
    '249':
      'ReactShallowRenderer render(): Shallow rendering works only with custom components, but the provided element type was `%s`.',
    '250': 'batch.render: Cannot render a batch that already committed.',
    '251': 'batch.commit: Cannot commit a batch multiple times.',
    '252':
      'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.',
    '253':
      'work.commit(): Cannot commit while already rendering. This likely means you attempted to commit from inside a lifecycle method.',
    '254':
      "Element ref was specified as a string (%s) but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a functional component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://react.dev/link/refs-must-have-owner for more information.",
    '255': 'Expected ReactFbErrorUtils.invokeGuardedCallback to be a function.',
    '257':
      'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.',
    '258':
      'Unknown element-like object type: %s. This is likely a bug in React. Please file an issue.',
    '259':
      'The experimental Call and Return types are not currently supported by the server renderer.',
    '260':
      'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.',
    '261':
      'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.',
    '262':
      'Expired work should have completed. This error is likely caused by a bug in React. Please file an issue.',
    '263': 'dispatch: Cannot dispatch during the render phase.',
    '264':
      'An error logging effect should not have been scheduled if no errors were captured. This error is likely caused by a bug in React. Please file an issue.',
    '265':
      'This unit of work tag cannot capture errors. This error is likely caused by a bug in React. Please file an issue.',
    '266': 'A subscription must return an unsubscribe function.',
    '267': 'The argument must be a React element, but you passed %s.',
    '268': 'Argument appears to not be a ReactComponent. Keys: %s',
    '269':
      'Profiler must specify an "id" string and "onRender" function as props',
    '270':
      'The current renderer does not support persistence. This error is likely caused by a bug in React. Please file an issue.',
    '271':
      'Failed to replay rendering after an error. This is likely caused by a bug in React. Please file an issue with a reproducing case to help us find it.',
    '273': 'Nesting of <View> within <Text> is not currently supported.',
    '274': 'Text strings must be rendered within a <Text> component.',
    '275':
      'The current renderer does not support mutation. This error is likely caused by a bug in React. Please file an issue.',
    '276':
      'React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills',
    '277':
      'Context.unstable_read(): Context can only be read while React is rendering, e.g. inside the render method or getDerivedStateFromProps.',
    '278': 'unstable_createRoot(...): Target container is not a DOM element.',
    '279':
      'Trying to release an event instance into a pool of a different type.',
    '280':
      'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.',
    '281':
      'Finished root should have a work-in-progress. This error is likely caused by a bug in React. Please file an issue.',
    '282':
      'If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.',
    '283':
      'Element type is invalid. Received a promise that resolves to: %s. Promise elements must resolve to a class or function.',
    '284':
      'Expected ref to be a function, an object returned by React.createRef(), or undefined/null.',
    '285':
      'The root failed to unmount after an error. This is likely a bug in React. Please file an issue.',
    '286':
      '%s(...): the first argument must be a React class instance. Instead received: %s.',
    '287':
      'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `schedule/tracking` module with `schedule/tracking-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://react.dev/link/profiling',
    '288':
      'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `schedule/tracing` module with `schedule/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://react.dev/link/profiling',
    '289': 'Function components cannot have refs.',
    '290':
      "Element ref was specified as a string (%s) but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://react.dev/link/refs-must-have-owner for more information.",
    '292':
      'The matcher `toHaveYielded` expects an instance of React Test Renderer.\n\nTry: expect(Scheduler).toHaveYielded(expectedYields)',
    '293':
      'Context can only be read while React is rendering, e.g. inside the render method or getDerivedStateFromProps.',
    '294': 'ReactDOMServer does not yet support Suspense.',
    '295': 'ReactDOMServer does not yet support lazy-loaded components.',
    '297':
      'The matcher `unstable_toHaveYielded` expects an instance of React Test Renderer.\n\nTry: expect(ReactTestRenderer).unstable_toHaveYielded(expectedYields)',
    '298': 'Hooks can only be called inside the body of a function component.',
    '299': 'Target container is not a DOM element.',
    '300':
      'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.',
    '301':
      'Too many re-renders. React limits the number of renders to prevent an infinite loop.',
    '302':
      'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://react.dev/link/profiling',
    '303':
      'ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.',
    '304':
      'Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.',
    '305':
      'The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.',
    '306':
      'Element type is invalid. Received a promise that resolves to: %s. Lazy element type must resolve to a class or function.%s',
    '307':
      'Hooks can only be called inside the body of a function component. (https://react.dev/link/invalid-hook-call)',
    '308':
      'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().',
    '309':
      'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://react.dev/link/strict-mode-string-ref',
    '310': 'Rendered more hooks than during the previous render.',
    '311':
      'Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)',
    '312': 'Rendered more hooks than during the previous render',
    '313':
      'Unknown priority level. This error is likely caused by a bug in React. Please file an issue.',
    '314':
      'Pinged unknown suspense boundary type. This is probably a bug in React.',
    '315':
      'Suspense boundaries are never on the root. This is probably a bug in React.',
    '316':
      'Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.',
    '317':
      'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.',
    '318':
      'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.',
    '319':
      'A dehydrated suspense boundary must commit before trying to render. This is probably a bug in React.',
    '320': 'Expected ReactFiberErrorDialog.showErrorDialog to be a function.',
    '321':
      'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.',
    '322': 'forwardRef requires a render function but was given %s.',
    '323': 'React has blocked a javascript: URL as a security precaution.',
    '326': 'Expected a valid priority level',
    '327': 'Should not already be working.',
    '328': 'Should have a work-in-progress.',
    '329': 'Unknown root exit status.',
    '330': 'Should be working on an effect.',
    '331': 'Cannot flush passive effects while already rendering.',
    '332': 'Unknown priority level.',
    '333':
      'This should have a parent host component initialized. This error is likely caused by a bug in React. Please file an issue.',
    '334': 'Accumulated items must not be null or undefined.',
    '335': 'ReactDOMServer does not yet support the event API.',
    '338': 'ReactDOMServer does not yet support the fundamental API.',
    '340':
      'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.',
    '341':
      'We just came from a parent so we must have had a parent. This is a bug in React.',
    '342':
      'A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
    '343': 'ReactDOMServer does not yet support scope components.',
    '344':
      'Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.',
    '345': 'Root did not complete. This is a bug in React.',
    '348':
      'ensureListeningTo(): received a container that was not an element node. This is likely a bug in React.',
    '349':
      'Expected a work-in-progress root. This is a bug in React. Please file an issue.',
    '350':
      'Cannot read from mutable source during the current render without tearing. This may be a bug in React. Please file an issue.',
    '351': 'Unsupported Server Component type: %s',
    '352': 'React Lazy Components are not yet supported on the server.',
    '353':
      'A server block should never encode any other slots. This is a bug in React.',
    '354': 'getInspectorDataForViewAtPoint() is not available in production.',
    '355':
      'The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly. (TODO: This feature was never released so we should be able to remove this error from the map.)',
    '356': 'Could not read the cache.',
    '357':
      'The current renderer does not support React Scopes. This error is likely caused by a bug in React. Please file an issue.',
    '358': 'Invalid update priority: %s. This is a bug in React.',
    '360': 'Invalid lane: %s. This is a bug in React.',
    '361':
      'The current renderer does not support test selectors. This error is likely caused by a bug in React. Please file an issue.',
    '362': 'Could not find React container within specified host subtree.',
    '363': 'Test selector API is not supported by this renderer.',
    '364':
      'Invalid host root specified. Should be either a React container or a node with a testname attribute.',
    '365': 'Invalid selector type specified.',
    '366':
      'ReactDOM.createEventHandle: setListener called on an target that did not have a corresponding root. This is likely a bug in React.',
    '367':
      'ReactDOM.createEventHandle: setListener called on an element target that is not managed by React. Ensure React rendered the DOM element.',
    '368':
      'ReactDOM.createEventHandle: setListener called on an invalid target. Provide a valid EventTarget or an element managed by React.',
    '369':
      'ReactDOM.createEventHandle: setter called on an invalid target. Provide a valid EventTarget or an element managed by React.',
    '370':
      'ReactDOM.createEventHandle: setter called with an invalid callback. The callback must be a function.',
    '371':
      'Text string must be rendered within a <Text> component.\n\nText: %s',
    '372':
      'Cannot call unstable_createEventHandle with "%s", as it is not an event known to React.',
    '373': 'This Hook is not supported in Server Components.',
    '374':
      'Event handlers cannot be passed to Client Component props.%s\nIf you need interactivity, consider converting part of this to a Client Component.',
    '375':
      'Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.%s',
    '376':
      'Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(%s) cannot be found among global symbols.%s',
    '377': 'BigInt (%s) is not yet supported in Client Component props.%s',
    '378': 'Type %s is not supported in Client Component props.%s',
    '379':
      'Refs cannot be used in Server Components, nor passed to Client Components.',
    '380': 'Reading the cache is only supported while rendering.',
    '381': 'This feature is not supported by ReactSuspenseTestUtils.',
    '382':
      'This query has received more parameters than the last time the same query was used. Always pass the exact number of parameters that the query needs.',
    '383':
      'This query has received fewer parameters than the last time the same query was used. Always pass the exact number of parameters that the query needs.',
    '384': 'Refreshing the cache is not supported in Server Components.',
    '385':
      'A mutable source was mutated while the %s component was rendering. This is not supported. Move any mutations into event handlers or effects.',
    '386':
      'The current renderer does not support microtasks. This error is likely caused by a bug in React. Please file an issue.',
    '387': 'Should have a current fiber. This is a bug in React.',
    '388': 'Expected to find a bailed out fiber. This is a bug in React.',
    '389': 'There can only be one root segment. This is a bug in React.',
    '390':
      'Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.',
    '391':
      'A previously unvisited boundary must have exactly one root segment. This is a bug in React.',
    '392':
      'A root segment ID must have been assigned by now. This is a bug in React.',
    '393': 'Cache cannot be refreshed during server rendering.',
    '394': 'startTransition cannot be called during server rendering.',
    '395': 'An ID must have been assigned before we can complete the boundary.',
    '396': 'More boundaries or placeholders than we expected to ever emit.',
    '397': 'Unknown insertion mode. This is a bug in React.',
    '398': '`dangerouslySetInnerHTML` does not work on <option>.',
    '399':
      '%s is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
    '400': 'menuitems cannot have `children` nor `dangerouslySetInnerHTML`.',
    '401':
      'The stacks must reach the root at the same time. This is a bug in React.',
    '402':
      'The depth must equal at least at zero before reaching the root. This is a bug in React.',
    '403':
      'Tried to pop a Context at the root of the app. This is a bug in React.',
    '404':
      'Invalid hook call. Hooks can only be called inside of the body of a function component.',
    '405': 'hydrateRoot(...): Target container is not a DOM element.',
    '406': 'act(...) is not supported in production builds of React.',
    '407':
      'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.',
    '408':
      'Missing getServerSnapshot, which is required for server-rendered content.',
    '409': 'Cannot update an unmounted root.',
    '411':
      '%s suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
    '412': 'Connection closed.',
    '413':
      'Expected finished root and lanes to be set. This is a bug in React.',
    '414':
      'Did not expect this call in production. This is a bug in React. Please file an issue.',
    '415':
      "Error parsing the data. It's probably an error code or network corruption.",
    '416': "This environment don't support binary chunks.",
    '417': 'React currently only supports piping to one writable stream.',
    '418':
      "Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\nhttps://react.dev/link/hydration-mismatch%s",
    '419':
      'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.',
    '420': 'ServerContext: %s already defined',
    '421':
      'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.',
    '422':
      'There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.',
    '423':
      'There was an error while hydrating but React was able to recover by instead client rendering the entire root.',
    '424':
      'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.',
    '425': 'Text content does not match server-rendered HTML.',
    '426':
      'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.',
    '427':
      'useServerContext expects a context created with React.createServerContext',
    '428': 'useServerContext is only supported while rendering.',
    '429': 'ServerContext: %s already defined',
    '430': 'ServerContext can only have a value prop and children. Found: %s',
    '431': 'React elements are not allowed in ServerContext',
    '432': 'The render was aborted by the server without a reason.',
    '433': 'useId can only be used while React is rendering',
    '434': '`dangerouslySetInnerHTML` does not make sense on <title>.',
    '435': 'Unexpected Suspense handler tag (%s). This is a bug in React.',
    '436':
      'Stylesheet resources need a unique representation in the DOM while hydrating and more than one matching DOM Node was found. To fix, ensure you are only rendering one stylesheet link with an href attribute of "%s".',
    '437':
      'the "precedence" prop for links to stylesheets expects to receive a string but received something of type "%s" instead.',
    '438': 'An unsupported type was passed to use(): %s',
    '439':
      "We didn't expect to see a forward reference. This is a bug in the React Server.",
    '440':
      "A function wrapped in useEffectEvent can't be called during rendering.",
    '441':
      'An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.',
    '442':
      'The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue.',
    '443':
      'acquireResource encountered a resource type it did not expect: "%s". this is a bug in React.',
    '444':
      'getResource encountered a type it did not expect: "%s". this is a bug in React.',
    '445': '"currentResources" was expected to exist. This is a bug in React.',
    '446': '"resourceRoot" was expected to exist. This is a bug in React.',
    '447':
      'While attempting to insert a Resource, React expected the Document to contain a head element but it was not found.',
    '448':
      'createPortal was called on the server. Portals are not currently supported on the server. Update your program to conditionally call createPortal on the client only.',
    '449':
      'flushSync was called on the server. This is likely caused by a function being called during render or in module scope that was intended to be called from an effect or event handler. Update your to not call flushSync no the server.',
    '450':
      'The current renderer does not support Singletons. This error is likely caused by a bug in React. Please file an issue.',
    '451':
      'resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.',
    '452':
      'React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.',
    '453':
      'React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.',
    '454':
      'React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.',
    '455':
      'This CacheSignal was requested outside React which means that it is immediately aborted.',
    '456': 'Calling Offscreen.detach before instance handle has been set.',
    '457':
      'acquireHeadResource encountered a resource type it did not expect: "%s". This is a bug in React.',
    '458': 'Currently React only supports one RSC renderer at a time.',
    '459':
      'Expected a suspended thenable. This is a bug in React. Please file an issue.',
    '460':
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`",
    '461':
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.",
    '462': 'Unexpected SuspendedReason. This is a bug in React.',
    '463':
      'ReactDOMServer.renderToNodeStream(): The Node Stream API is not available in Bun. Use ReactDOMServer.renderToReadableStream() instead.',
    '464':
      'ReactDOMServer.renderToStaticNodeStream(): The Node Stream API is not available in Bun. Use ReactDOMServer.renderToReadableStream() instead.',
    '465':
      'enableFizzExternalRuntime without enableFloat is not supported. This should never appear in production, since it means you are using a misconfigured React bundle.',
    '466':
      'Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.',
    '467':
      'Update hook called on initial render. This is likely a bug in React. Please file an issue.',
    '468':
      'getNodesForType encountered a type it did not expect: "%s". This is a bug in React.',
    '469':
      'Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.',
    '470':
      'Only global symbols received from Symbol.for(...) can be passed to Server Functions. The symbol Symbol.for(%s) cannot be found among global symbols.',
    '471':
      'BigInt (%s) is not yet supported as an argument to a Server Function.',
    '472': 'Type %s is not supported as an argument to a Server Function.',
    '473':
      "React doesn't accept base64 encoded file uploads because we don't except form data passed from a browser to ever encode data that way. If that's the wrong assumption, we can easily fix it.",
    '474':
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.",
    '475':
      'Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug.',
    '476':
      'Expected the form instance to be a HostComponent. This is a bug in React.',
    '477':
      'React Internal Error: processHintChunk is not implemented for Native-Relay. The fact that this method was called means there is a bug in React.',
    '478': 'Thenable should have already resolved. This is a bug in React.',
    '479': 'Cannot update optimistic state while rendering.',
    '480':
      'File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.',
    '481':
      'Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.',
    '482':
      "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
    '483':
      "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
    '484':
      'A Server Component was postponed. The reason is omitted in production builds to avoid leaking sensitive details.',
    '485': 'Cannot update form state while rendering.',
    '486':
      'It should not be possible to postpone at the root. This is a bug in React.',
    '487':
      'We should not have any resumable nodes in the shell. This is a bug in React.',
    '488':
      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.",
    '489':
      "Expected the resume to render <%s> in this slot but instead it rendered <%s>. The tree doesn't match so React will fallback to client rendering.",
    '490':
      "Expected the resume to render <%s> in this slot but instead it rendered <%s>. The tree doesn't match so React will fallback to client rendering.",
    '491':
      'It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.',
    '492':
      'The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.',
    '493':
      'To taint a value, a lifetime must be defined by passing an object that holds the value.',
    '494':
      'taintUniqueValue cannot taint objects or functions. Try taintObjectReference instead.',
    '495':
      'Cannot taint a %s because the value is too general and not unique enough to block globally.',
    '496':
      'Only objects or functions can be passed to taintObjectReference. Try taintUniqueValue instead.',
    '497': 'Only objects or functions can be passed to taintObjectReference.',
    '498':
      'Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported.%s',
    '499':
      'Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.%s',
    '500':
      'React expected a headers state to exist when emitEarlyPreloads was called but did not find it. This suggests emitEarlyPreloads was called more than once per request. This is a bug in React.',
    '501':
      'The render was aborted with postpone when the shell is incomplete. Reason: %s',
    '502': 'Cannot read a Client Context from a Server Component.',
    '503': 'Cannot use() an already resolved Client Reference.',
    '504':
      'Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.',
    '505':
      'Cannot render an Async Component, Promise or React.Lazy inside React.Children. We recommend not iterating over children and just rendering them plain.',
    '506':
      'Functions are not valid as a child of Client Components. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.%s',
    '507':
      'Expected the last optional `callback` argument to be a function. Instead received: %s.',
    '508':
      'The first argument must be a React class instance. Instead received: %s.',
    '509': 'ReactDOM: Unsupported Legacy Mode API.',
    '510':
      'React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.%s',
    '511':
      'Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.',
    '512':
      "The RSC response contained a reference that doesn't exist in the temporary reference set. Always pass the matching set that was used to create the reply when parsing its response.",
    '513':
      'Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.',
    '514':
      'Cannot access %s on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.',
    '515':
      'Cannot assign to a temporary client reference from a server module.',
    '516':
      "Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
    '517':
      'Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.%s',
    '518':
      'Saw multiple hydration diff roots in a pass. This is a bug in React.',
    '519':
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.",
    '520':
      'There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.',
    '521':
      'flushSyncWork should not be called from builds that support legacy mode. This is a bug in React.',
    '522':
      'Invalid form element. requestFormReset must be passed a form that was rendered by React.',
    '523': 'The render was aborted due to being postponed.',
    '524':
      'Values cannot be passed to next() of AsyncIterables passed to Client Components.',
    '525':
      'A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.',
    '526':
      'Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.',
    '527':
      'Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:\n  - react:      %s\n  - react-dom:  %s\nLearn more: https://react.dev/warnings/version-mismatch',
    '528':
      'Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key.%s',
    '529':
      'Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key.%s',
    '530': 'The render was aborted by the server with a promise.',
    '531':
      'react-markup is not supported outside a React Server Components environment.',
    '532':
      'Attempted to render a Client Component from renderToHTML. This is not supported since it will never hydrate. Only render Server Components with renderToHTML.',
    '533':
      'Attempted to render a Server Action from renderToHTML. This is not supported since it varies by version of the app. Use a fixed URL for any forms instead.',
    '534':
      'renderToHTML should not have emitted Client References. This is a bug in React.',
    '535':
      'renderToHTML should not have emitted Server References. This is a bug in React.',
    '536':
      'Cannot pass ref in renderToHTML because they will never be hydrated.',
    '537':
      'Cannot pass event handlers (%s) in renderToHTML because the HTML will never be hydrated so they can never get called.',
    '538':
      'Cannot use state or effect Hooks in renderToHTML because this component will never be hydrated.',
    '539':
      'Binary RSC chunks cannot be encoded as strings. This is a bug in the wiring of the React streams.',
    '540':
      'String chunks need to be passed in their original shape. Not split into smaller string chunks. This is a bug in the wiring of the React streams.',
    '541': 'Compared context values must be arrays',
  };

  const code = typeof params?.errorCode === 'string' ? params?.errorCode : null;
  if (code && !errorCodes[code]) {
    return {
      notFound: true,
    };
  }

  const fs = require('fs');
  const rootDir = process.cwd() + '/src/content/errors';

  // Read MDX from the file.
  let path = params?.errorCode || 'index';
  let mdx;
  try {
    mdx = fs.readFileSync(rootDir + '/' + path + '.md', 'utf8');
  } catch {
    // if [errorCode].md is not found, fallback to generic.md
    mdx = fs.readFileSync(rootDir + '/generic.md', 'utf8');
  }

  const {content, toc, meta} = await compileMDX(mdx, path, {code, errorCodes});

  return {
    props: {
      content,
      toc,
      meta,
      errorCode: code,
      errorMessage: code ? errorCodes[code] : null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  /**
   * Fetch error codes from GitHub
   */
  const errorCodes = {
    '0': 'Encountered an invalid child; DOM elements are not valid children of React components.',
    '1': 'update(): expected target of %s to be an array; got %s.',
    '2': 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?',
    '3': 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?',
    '4': 'Cannot have more than one key in an object with %s',
    '5': "update(): %s expects a spec of type 'object'; got %s",
    '6': "update(): %s expects a target of type 'object'; got %s",
    '7': 'Expected %s target to be an array; got %s',
    '8': 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?',
    '9': 'update(): expected spec of %s to be a function; got %s.',
    '10': 'instance must be a composite component',
    '11': 'TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.',
    '12': 'ReactShallowRenderer render(): Invalid component element.%s',
    '13': 'ReactShallowRenderer render(): Shallow rendering works only with custom components, not primitives (%s). Instead of calling `.render(el)` and inspecting the rendered output, look at `el.props` directly instead.',
    '14': 'TestUtils.Simulate expects a component instance and not a ReactElement.TestUtils.Simulate will not work if you are using shallow rendering.',
    '15': 'instance must be a composite component',
    '16': 'Do not override existing functions.',
    '17': 'All native instances should have a tag.',
    '18': 'Expected a component class, got %s.%s',
    '19': 'Expect a native root tag, instead got %s',
    '20': 'RawText "%s" must be wrapped in an explicit <Text> component.',
    '21': 'Argument is not a component (type: %s, keys: %s)',
    '22': 'Unable to find node handle for unmounted component.',
    '23': 'onlyChild must be passed a children with exactly one child.',
    '24': 'Mismatched list of contexts in callback queue',
    '25': 'Trying to release an instance into a pool of a different type.',
    '26': 'Unexpected node: %s',
    '27': 'Cannot initialize a transaction when there is already an outstanding transaction.',
    '28': 'Transaction.closeAll(): Cannot close transaction when none are open.',
    '29': 'Accumulated items must be not be null or undefined.',
    '30': 'Accumulated items must not be null or undefined.',
    '31': 'Objects are not valid as a React child (found: %s). If you meant to render a collection of children, use an array instead.',
    '32': 'Unable to find element with ID %s.',
    '33': 'getNodeFromInstance: Invalid argument.',
    '34': 'React DOM tree root should always have a node reference.',
    '35': 'isAncestor: Invalid argument.',
    '36': 'getParentInstance: Invalid argument.',
    '37': '_Target container is not a DOM element.',
    '38': 'parentComponent must be a valid React Component',
    '39': 'ReactDOM.render(): Invalid component element.%s',
    '40': 'Target container is not a DOM element.',
    '41': 'Target container is not valid.',
    '42': "You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s",
    '43': "You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.",
    '44': 'findDOMNode was called on an unmounted component.',
    '45': 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)',
    '46': 'renderToString(): You must pass a valid ReactElement.',
    '47': 'renderToStaticMarkup(): You must pass a valid ReactElement.',
    '48': "You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",
    '49': 'DOMProperty: Properties that have side effects must use property: %s',
    '50': 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s',
    '51': 'Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString for server rendering.',
    '52': 'Missing markup.',
    '53': 'Danger: Assigning to an already-occupied result index.',
    '54': 'Danger: Did not assign to every index of resultList.',
    '55': 'Danger: Expected markup to render %s nodes, but rendered %s.',
    '56': 'Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.',
    '57': 'Missing markup.',
    '58': 'Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().',
    '59': '%s is a void element tag and must not have `children` or use `props.dangerouslySetInnerHTML`.',
    '60': 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.',
    '61': '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.',
    '62': "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.",
    '63': 'Must be mounted to trap events',
    '64': 'Requires node to be rendered.',
    '65': 'Invalid tag: %s',
    '66': '<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.',
    '67': 'Missing closing comment for text component %s',
    '68': 'Expected devtool events to fire for the child before its parent includes it in onSetChildren().',
    '69': 'Expected onSetDisplayName() to fire for the child before its parent includes it in onSetChildren().',
    '70': 'Expected onSetChildren() or onSetText() to fire for the child before its parent includes it in onSetChildren().',
    '71': 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().',
    '72': 'Expected onSetParent() and onSetChildren() to be consistent (%s has parents %s and %s).',
    '73': 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',
    '74': 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
    '75': "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object.",
    '76': "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.",
    '77': 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',
    '78': 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
    '79': 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
    '80': 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.',
    '81': 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',
    '82': '%s.getInitialState(): must return an object or null',
    '83': 'Class specification must implement a `render` method.',
    '84': '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',
    '85': 'takes an object of state variables to update or a function which returns an object of state variables.',
    '86': 'SimpleEventPlugin: Unhandled event type, `%s`.',
    '87': "Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.",
    '88': "Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.",
    '89': "Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink",
    '90': 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.',
    '91': '`dangerouslySetInnerHTML` does not make sense on <textarea>.',
    '92': 'If you supply `defaultValue` on a <textarea>, do not pass children.',
    '93': '<textarea> can only have at most one child.',
    '94': 'Expected %s listener to be a function, instead got type %s',
    '95': 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.',
    '96': 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.',
    '97': 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.',
    '98': 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',
    '99': 'EventPluginRegistry: More than one plugin attempted to publish the same event name, `%s`.',
    '100':
      'EventPluginRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
    '101':
      'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.',
    '102':
      'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.',
    '103': 'Invalid `event`.',
    '104':
      'ReactCompositeComponent: injectEnvironment() can only be called once.',
    '105':
      'A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',
    '106': '%s.state: must be set to an object or null',
    '107':
      '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
    '108':
      '%s.getChildContext(): key "%s" is not defined in childContextTypes.',
    '109':
      '%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',
    '110': 'Stateless function components cannot have refs.',
    '111': 'There is no registered component for the tag %s',
    '112': 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',
    '113':
      'React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',
    '114':
      'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',
    '115': 'Cannot traverse from and to the same ID, `%s`.',
    '116':
      'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.',
    '117':
      'traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s',
    '118': 'updateTextContent called on non-empty component.',
    '119':
      "Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://react.dev/link/refs-must-have-owner).",
    '120':
      "Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://react.dev/link/refs-must-have-owner).",
    '121':
      'performUpdateIfNecessary: Unexpected batch number (current %s, pending %s)',
    '122':
      '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
    '123':
      'ReactUpdates: must inject a reconcile transaction class and batching strategy',
    '124':
      "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",
    '125':
      "ReactUpdates.asap: Can't enqueue an asap callback in a context where updates are not being batched.",
    '126': 'ReactUpdates: must provide a reconcile transaction class',
    '127': 'ReactUpdates: must provide a batching strategy',
    '128': 'ReactUpdates: must provide a batchedUpdates() function',
    '129': 'ReactUpdates: must provide an isBatchingUpdates boolean attribute',
    '130':
      'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
    '131': 'Encountered invalid React node of type %s',
    '132': 'Ended a touch event which was not counted in trackedTouchCount.',
    '133': 'Touch object is missing identifier',
    '134': 'Touch data should have been recorded on start',
    '135': 'Cannot find single active touch',
    '136':
      'Attempted to update component `%s` that has already been unmounted (or failed to mount).',
    '137':
      '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
    '138': 'Touch object is missing identifier.',
    '139': "ReactTestRenderer: .update() can't be called after unmount.",
    '140':
      'Expected hook events to fire for the child before its parent includes it in onSetChildren().',
    '141':
      'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().',
    '142':
      'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).',
    '143':
      'React.Children.only expected to receive a single React element child.',
    '144': 'Item must have been set',
    '145':
      'hostContainerInfo should be populated before getPublicInstance is called.',
    '146':
      'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.',
    '147':
      'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.',
    '148': 'Expected ref to be a function or a string.',
    '149':
      'Element ref was specified as a string (%s) but no owner was set. You may have multiple copies of React loaded. (details: https://react.dev/link/refs-must-have-owner).',
    '150':
      'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.',
    '151': 'An iterable object provided no iterator.',
    '152':
      'Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.',
    '153': 'Resuming work not yet implemented.',
    '154':
      'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.',
    '155':
      'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.',
    '156':
      'Unknown unit of work tag (%s). This error is likely caused by a bug in React. Please file an issue.',
    '157':
      'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.',
    '158':
      'There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.',
    '159':
      'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.',
    '160':
      'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.',
    '161':
      'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.',
    '162':
      'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.',
    '163':
      'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.',
    '164': 'A coroutine cannot have host component children.',
    '165':
      'Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.',
    '166':
      'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.',
    '167':
      'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.',
    '168':
      'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.',
    '169':
      'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.',
    '170':
      'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.',
    '171':
      'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.',
    '172': 'The custom dialog was already injected.',
    '173': 'Injected showDialog() must be a function.',
    '174':
      'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.',
    '175':
      'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.',
    '176':
      'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.',
    '177':
      'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.',
    '178':
      'Should have next effect. This error is likely caused by a bug in React. Please file an issue.',
    '179':
      'Should have a pending commit. This error is likely caused by a bug in React. Please file an issue.',
    '180':
      'Commit phase errors should be scheduled to recover with task priority. This error is likely caused by a bug in React. Please file an issue.',
    '181':
      'Switch statement should be exhaustive. This error is likely caused by a bug in React. Please file an issue.',
    '182':
      'performWork was called recursively. This error is likely caused by a bug in React. Please file an issue.',
    '183':
      'Should have found an error boundary. This error is likely caused by a bug in React. Please file an issue.',
    '184':
      'No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.',
    '185':
      'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.',
    '186':
      'Task updates can only be scheduled as a nested update or inside batchedUpdates.',
    '187':
      'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.',
    '188': 'Unable to find node on an unmounted component.',
    '189':
      'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.',
    '190':
      "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
    '191':
      'Invalid argument passed as callback. Expected a function. Instead received: %s',
    '192':
      'React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers.',
    '193':
      'The server renderer does not implement support for array children yet.',
    '194':
      'Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.',
    '195':
      'The internal instance must be a React host component. This error is likely caused by a bug in React. Please file an issue.',
    '196': 'Missing injection for fiber getContextForSubtree',
    '197': 'Injected invokeGuardedCallback() must be a function.',
    '198':
      'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.',
    '199': 'Fiber owners should not show up in Stack stack traces.',
    '200': 'Target container is not a DOM element.',
    '201':
      "ReactDOM.render(): Invalid component element. Instead of passing a string like 'div', pass React.createElement('div') or <div />.",
    '202':
      'ReactDOM.render(): Invalid component element. Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.',
    '203':
      'ReactDOM.render(): Invalid component element. This may be caused by unintentionally loading two independent copies of React.',
    '204': 'ReactDOM.render(): Invalid component element.',
    '205': 'renderToNodeStream(): Invalid component element.',
    '206': 'renderToStaticNodeStream(): Invalid component element.',
    '207':
      'ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.',
    '208':
      'ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.',
    '209': 'renderToString(): Invalid component element.',
    '210': 'renderToStaticMarkup(): Invalid component element.',
    '211': 'Missing injection for fiber findDOMNode',
    '212': 'Missing injection for stack findDOMNode',
    '213': 'Element appears to be neither ReactComponent nor DOMNode. Keys: %s',
    '214': 'toTree() does not yet know how to handle nodes with tag=%s',
    '215': 'something went wrong',
    '216': 'Text children should already be flattened.',
    '217': 'ReactART does not support the type "%s"',
    '218': 'ReactART: Can not insert node before itself',
    '219': 'getInspectorDataForViewTag() is not available in production',
    '220': 'Container does not support insertBefore operation',
    '221': 'Tried to register two views with the same name %s',
    '222': 'View config not found for name %s',
    '224':
      "Can't read from currently-mounting component. This error is likely caused by a bug in React. Please file an issue.",
    '225':
      'Unexpected object passed to ReactTestInstance constructor (tag: %s). This is probably a bug in React.',
    '226':
      'Unsupported component type %s in test renderer. This is probably a bug in React.',
    '227':
      'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.',
    '228':
      'TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.',
    '229':
      'TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.',
    '230':
      "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.unstable_createPortal).",
    '231':
      'Expected `%s` listener to be a function, instead got a value of `%s` type.',
    '232':
      "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).",
    '233': 'Unsupported top level event type "%s" dispatched',
    '234': 'Event cannot be both direct and bubbling: %s',
    '235': 'Persistent reconciler is disabled.',
    '236': 'Noop reconciler is disabled.',
    '237': 'Mutating reconciler is disabled.',
    '238':
      'Task updates can only be scheduled as a nested update or inside batchedUpdates. This error is likely caused by a bug in React. Please file an issue.',
    '239': 'Measure not implemented yet',
    '240': 'Text components are not supported for now.',
    '241': 'Text components are not yet supported.',
    '242':
      '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
    '243':
      'renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.',
    '244':
      'Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue.',
    '245':
      'performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.',
    '246':
      'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.',
    '247': 'A call cannot have host component children.',
    '248': 'Not implemented.',
    '249':
      'ReactShallowRenderer render(): Shallow rendering works only with custom components, but the provided element type was `%s`.',
    '250': 'batch.render: Cannot render a batch that already committed.',
    '251': 'batch.commit: Cannot commit a batch multiple times.',
    '252':
      'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.',
    '253':
      'work.commit(): Cannot commit while already rendering. This likely means you attempted to commit from inside a lifecycle method.',
    '254':
      "Element ref was specified as a string (%s) but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a functional component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://react.dev/link/refs-must-have-owner for more information.",
    '255': 'Expected ReactFbErrorUtils.invokeGuardedCallback to be a function.',
    '257':
      'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.',
    '258':
      'Unknown element-like object type: %s. This is likely a bug in React. Please file an issue.',
    '259':
      'The experimental Call and Return types are not currently supported by the server renderer.',
    '260':
      'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.',
    '261':
      'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.',
    '262':
      'Expired work should have completed. This error is likely caused by a bug in React. Please file an issue.',
    '263': 'dispatch: Cannot dispatch during the render phase.',
    '264':
      'An error logging effect should not have been scheduled if no errors were captured. This error is likely caused by a bug in React. Please file an issue.',
    '265':
      'This unit of work tag cannot capture errors. This error is likely caused by a bug in React. Please file an issue.',
    '266': 'A subscription must return an unsubscribe function.',
    '267': 'The argument must be a React element, but you passed %s.',
    '268': 'Argument appears to not be a ReactComponent. Keys: %s',
    '269':
      'Profiler must specify an "id" string and "onRender" function as props',
    '270':
      'The current renderer does not support persistence. This error is likely caused by a bug in React. Please file an issue.',
    '271':
      'Failed to replay rendering after an error. This is likely caused by a bug in React. Please file an issue with a reproducing case to help us find it.',
    '273': 'Nesting of <View> within <Text> is not currently supported.',
    '274': 'Text strings must be rendered within a <Text> component.',
    '275':
      'The current renderer does not support mutation. This error is likely caused by a bug in React. Please file an issue.',
    '276':
      'React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills',
    '277':
      'Context.unstable_read(): Context can only be read while React is rendering, e.g. inside the render method or getDerivedStateFromProps.',
    '278': 'unstable_createRoot(...): Target container is not a DOM element.',
    '279':
      'Trying to release an event instance into a pool of a different type.',
    '280':
      'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.',
    '281':
      'Finished root should have a work-in-progress. This error is likely caused by a bug in React. Please file an issue.',
    '282':
      'If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.',
    '283':
      'Element type is invalid. Received a promise that resolves to: %s. Promise elements must resolve to a class or function.',
    '284':
      'Expected ref to be a function, an object returned by React.createRef(), or undefined/null.',
    '285':
      'The root failed to unmount after an error. This is likely a bug in React. Please file an issue.',
    '286':
      '%s(...): the first argument must be a React class instance. Instead received: %s.',
    '287':
      'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `schedule/tracking` module with `schedule/tracking-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://react.dev/link/profiling',
    '288':
      'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `schedule/tracing` module with `schedule/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://react.dev/link/profiling',
    '289': 'Function components cannot have refs.',
    '290':
      "Element ref was specified as a string (%s) but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://react.dev/link/refs-must-have-owner for more information.",
    '292':
      'The matcher `toHaveYielded` expects an instance of React Test Renderer.\n\nTry: expect(Scheduler).toHaveYielded(expectedYields)',
    '293':
      'Context can only be read while React is rendering, e.g. inside the render method or getDerivedStateFromProps.',
    '294': 'ReactDOMServer does not yet support Suspense.',
    '295': 'ReactDOMServer does not yet support lazy-loaded components.',
    '297':
      'The matcher `unstable_toHaveYielded` expects an instance of React Test Renderer.\n\nTry: expect(ReactTestRenderer).unstable_toHaveYielded(expectedYields)',
    '298': 'Hooks can only be called inside the body of a function component.',
    '299': 'Target container is not a DOM element.',
    '300':
      'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.',
    '301':
      'Too many re-renders. React limits the number of renders to prevent an infinite loop.',
    '302':
      'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://react.dev/link/profiling',
    '303':
      'ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.',
    '304':
      'Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.',
    '305':
      'The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.',
    '306':
      'Element type is invalid. Received a promise that resolves to: %s. Lazy element type must resolve to a class or function.%s',
    '307':
      'Hooks can only be called inside the body of a function component. (https://react.dev/link/invalid-hook-call)',
    '308':
      'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().',
    '309':
      'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://react.dev/link/strict-mode-string-ref',
    '310': 'Rendered more hooks than during the previous render.',
    '311':
      'Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)',
    '312': 'Rendered more hooks than during the previous render',
    '313':
      'Unknown priority level. This error is likely caused by a bug in React. Please file an issue.',
    '314':
      'Pinged unknown suspense boundary type. This is probably a bug in React.',
    '315':
      'Suspense boundaries are never on the root. This is probably a bug in React.',
    '316':
      'Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.',
    '317':
      'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.',
    '318':
      'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.',
    '319':
      'A dehydrated suspense boundary must commit before trying to render. This is probably a bug in React.',
    '320': 'Expected ReactFiberErrorDialog.showErrorDialog to be a function.',
    '321':
      'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.',
    '322': 'forwardRef requires a render function but was given %s.',
    '323': 'React has blocked a javascript: URL as a security precaution.',
    '326': 'Expected a valid priority level',
    '327': 'Should not already be working.',
    '328': 'Should have a work-in-progress.',
    '329': 'Unknown root exit status.',
    '330': 'Should be working on an effect.',
    '331': 'Cannot flush passive effects while already rendering.',
    '332': 'Unknown priority level.',
    '333':
      'This should have a parent host component initialized. This error is likely caused by a bug in React. Please file an issue.',
    '334': 'Accumulated items must not be null or undefined.',
    '335': 'ReactDOMServer does not yet support the event API.',
    '338': 'ReactDOMServer does not yet support the fundamental API.',
    '340':
      'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.',
    '341':
      'We just came from a parent so we must have had a parent. This is a bug in React.',
    '342':
      'A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
    '343': 'ReactDOMServer does not yet support scope components.',
    '344':
      'Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.',
    '345': 'Root did not complete. This is a bug in React.',
    '348':
      'ensureListeningTo(): received a container that was not an element node. This is likely a bug in React.',
    '349':
      'Expected a work-in-progress root. This is a bug in React. Please file an issue.',
    '350':
      'Cannot read from mutable source during the current render without tearing. This may be a bug in React. Please file an issue.',
    '351': 'Unsupported Server Component type: %s',
    '352': 'React Lazy Components are not yet supported on the server.',
    '353':
      'A server block should never encode any other slots. This is a bug in React.',
    '354': 'getInspectorDataForViewAtPoint() is not available in production.',
    '355':
      'The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly. (TODO: This feature was never released so we should be able to remove this error from the map.)',
    '356': 'Could not read the cache.',
    '357':
      'The current renderer does not support React Scopes. This error is likely caused by a bug in React. Please file an issue.',
    '358': 'Invalid update priority: %s. This is a bug in React.',
    '360': 'Invalid lane: %s. This is a bug in React.',
    '361':
      'The current renderer does not support test selectors. This error is likely caused by a bug in React. Please file an issue.',
    '362': 'Could not find React container within specified host subtree.',
    '363': 'Test selector API is not supported by this renderer.',
    '364':
      'Invalid host root specified. Should be either a React container or a node with a testname attribute.',
    '365': 'Invalid selector type specified.',
    '366':
      'ReactDOM.createEventHandle: setListener called on an target that did not have a corresponding root. This is likely a bug in React.',
    '367':
      'ReactDOM.createEventHandle: setListener called on an element target that is not managed by React. Ensure React rendered the DOM element.',
    '368':
      'ReactDOM.createEventHandle: setListener called on an invalid target. Provide a valid EventTarget or an element managed by React.',
    '369':
      'ReactDOM.createEventHandle: setter called on an invalid target. Provide a valid EventTarget or an element managed by React.',
    '370':
      'ReactDOM.createEventHandle: setter called with an invalid callback. The callback must be a function.',
    '371':
      'Text string must be rendered within a <Text> component.\n\nText: %s',
    '372':
      'Cannot call unstable_createEventHandle with "%s", as it is not an event known to React.',
    '373': 'This Hook is not supported in Server Components.',
    '374':
      'Event handlers cannot be passed to Client Component props.%s\nIf you need interactivity, consider converting part of this to a Client Component.',
    '375':
      'Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.%s',
    '376':
      'Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(%s) cannot be found among global symbols.%s',
    '377': 'BigInt (%s) is not yet supported in Client Component props.%s',
    '378': 'Type %s is not supported in Client Component props.%s',
    '379':
      'Refs cannot be used in Server Components, nor passed to Client Components.',
    '380': 'Reading the cache is only supported while rendering.',
    '381': 'This feature is not supported by ReactSuspenseTestUtils.',
    '382':
      'This query has received more parameters than the last time the same query was used. Always pass the exact number of parameters that the query needs.',
    '383':
      'This query has received fewer parameters than the last time the same query was used. Always pass the exact number of parameters that the query needs.',
    '384': 'Refreshing the cache is not supported in Server Components.',
    '385':
      'A mutable source was mutated while the %s component was rendering. This is not supported. Move any mutations into event handlers or effects.',
    '386':
      'The current renderer does not support microtasks. This error is likely caused by a bug in React. Please file an issue.',
    '387': 'Should have a current fiber. This is a bug in React.',
    '388': 'Expected to find a bailed out fiber. This is a bug in React.',
    '389': 'There can only be one root segment. This is a bug in React.',
    '390':
      'Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.',
    '391':
      'A previously unvisited boundary must have exactly one root segment. This is a bug in React.',
    '392':
      'A root segment ID must have been assigned by now. This is a bug in React.',
    '393': 'Cache cannot be refreshed during server rendering.',
    '394': 'startTransition cannot be called during server rendering.',
    '395': 'An ID must have been assigned before we can complete the boundary.',
    '396': 'More boundaries or placeholders than we expected to ever emit.',
    '397': 'Unknown insertion mode. This is a bug in React.',
    '398': '`dangerouslySetInnerHTML` does not work on <option>.',
    '399':
      '%s is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
    '400': 'menuitems cannot have `children` nor `dangerouslySetInnerHTML`.',
    '401':
      'The stacks must reach the root at the same time. This is a bug in React.',
    '402':
      'The depth must equal at least at zero before reaching the root. This is a bug in React.',
    '403':
      'Tried to pop a Context at the root of the app. This is a bug in React.',
    '404':
      'Invalid hook call. Hooks can only be called inside of the body of a function component.',
    '405': 'hydrateRoot(...): Target container is not a DOM element.',
    '406': 'act(...) is not supported in production builds of React.',
    '407':
      'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.',
    '408':
      'Missing getServerSnapshot, which is required for server-rendered content.',
    '409': 'Cannot update an unmounted root.',
    '411':
      '%s suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
    '412': 'Connection closed.',
    '413':
      'Expected finished root and lanes to be set. This is a bug in React.',
    '414':
      'Did not expect this call in production. This is a bug in React. Please file an issue.',
    '415':
      "Error parsing the data. It's probably an error code or network corruption.",
    '416': "This environment don't support binary chunks.",
    '417': 'React currently only supports piping to one writable stream.',
    '418':
      "Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\nhttps://react.dev/link/hydration-mismatch%s",
    '419':
      'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.',
    '420': 'ServerContext: %s already defined',
    '421':
      'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.',
    '422':
      'There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.',
    '423':
      'There was an error while hydrating but React was able to recover by instead client rendering the entire root.',
    '424':
      'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.',
    '425': 'Text content does not match server-rendered HTML.',
    '426':
      'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.',
    '427':
      'useServerContext expects a context created with React.createServerContext',
    '428': 'useServerContext is only supported while rendering.',
    '429': 'ServerContext: %s already defined',
    '430': 'ServerContext can only have a value prop and children. Found: %s',
    '431': 'React elements are not allowed in ServerContext',
    '432': 'The render was aborted by the server without a reason.',
    '433': 'useId can only be used while React is rendering',
    '434': '`dangerouslySetInnerHTML` does not make sense on <title>.',
    '435': 'Unexpected Suspense handler tag (%s). This is a bug in React.',
    '436':
      'Stylesheet resources need a unique representation in the DOM while hydrating and more than one matching DOM Node was found. To fix, ensure you are only rendering one stylesheet link with an href attribute of "%s".',
    '437':
      'the "precedence" prop for links to stylesheets expects to receive a string but received something of type "%s" instead.',
    '438': 'An unsupported type was passed to use(): %s',
    '439':
      "We didn't expect to see a forward reference. This is a bug in the React Server.",
    '440':
      "A function wrapped in useEffectEvent can't be called during rendering.",
    '441':
      'An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.',
    '442':
      'The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue.',
    '443':
      'acquireResource encountered a resource type it did not expect: "%s". this is a bug in React.',
    '444':
      'getResource encountered a type it did not expect: "%s". this is a bug in React.',
    '445': '"currentResources" was expected to exist. This is a bug in React.',
    '446': '"resourceRoot" was expected to exist. This is a bug in React.',
    '447':
      'While attempting to insert a Resource, React expected the Document to contain a head element but it was not found.',
    '448':
      'createPortal was called on the server. Portals are not currently supported on the server. Update your program to conditionally call createPortal on the client only.',
    '449':
      'flushSync was called on the server. This is likely caused by a function being called during render or in module scope that was intended to be called from an effect or event handler. Update your to not call flushSync no the server.',
    '450':
      'The current renderer does not support Singletons. This error is likely caused by a bug in React. Please file an issue.',
    '451':
      'resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.',
    '452':
      'React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.',
    '453':
      'React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.',
    '454':
      'React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.',
    '455':
      'This CacheSignal was requested outside React which means that it is immediately aborted.',
    '456': 'Calling Offscreen.detach before instance handle has been set.',
    '457':
      'acquireHeadResource encountered a resource type it did not expect: "%s". This is a bug in React.',
    '458': 'Currently React only supports one RSC renderer at a time.',
    '459':
      'Expected a suspended thenable. This is a bug in React. Please file an issue.',
    '460':
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`",
    '461':
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.",
    '462': 'Unexpected SuspendedReason. This is a bug in React.',
    '463':
      'ReactDOMServer.renderToNodeStream(): The Node Stream API is not available in Bun. Use ReactDOMServer.renderToReadableStream() instead.',
    '464':
      'ReactDOMServer.renderToStaticNodeStream(): The Node Stream API is not available in Bun. Use ReactDOMServer.renderToReadableStream() instead.',
    '465':
      'enableFizzExternalRuntime without enableFloat is not supported. This should never appear in production, since it means you are using a misconfigured React bundle.',
    '466':
      'Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.',
    '467':
      'Update hook called on initial render. This is likely a bug in React. Please file an issue.',
    '468':
      'getNodesForType encountered a type it did not expect: "%s". This is a bug in React.',
    '469':
      'Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.',
    '470':
      'Only global symbols received from Symbol.for(...) can be passed to Server Functions. The symbol Symbol.for(%s) cannot be found among global symbols.',
    '471':
      'BigInt (%s) is not yet supported as an argument to a Server Function.',
    '472': 'Type %s is not supported as an argument to a Server Function.',
    '473':
      "React doesn't accept base64 encoded file uploads because we don't except form data passed from a browser to ever encode data that way. If that's the wrong assumption, we can easily fix it.",
    '474':
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.",
    '475':
      'Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug.',
    '476':
      'Expected the form instance to be a HostComponent. This is a bug in React.',
    '477':
      'React Internal Error: processHintChunk is not implemented for Native-Relay. The fact that this method was called means there is a bug in React.',
    '478': 'Thenable should have already resolved. This is a bug in React.',
    '479': 'Cannot update optimistic state while rendering.',
    '480':
      'File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.',
    '481':
      'Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.',
    '482':
      "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
    '483':
      "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
    '484':
      'A Server Component was postponed. The reason is omitted in production builds to avoid leaking sensitive details.',
    '485': 'Cannot update form state while rendering.',
    '486':
      'It should not be possible to postpone at the root. This is a bug in React.',
    '487':
      'We should not have any resumable nodes in the shell. This is a bug in React.',
    '488':
      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.",
    '489':
      "Expected the resume to render <%s> in this slot but instead it rendered <%s>. The tree doesn't match so React will fallback to client rendering.",
    '490':
      "Expected the resume to render <%s> in this slot but instead it rendered <%s>. The tree doesn't match so React will fallback to client rendering.",
    '491':
      'It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.',
    '492':
      'The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.',
    '493':
      'To taint a value, a lifetime must be defined by passing an object that holds the value.',
    '494':
      'taintUniqueValue cannot taint objects or functions. Try taintObjectReference instead.',
    '495':
      'Cannot taint a %s because the value is too general and not unique enough to block globally.',
    '496':
      'Only objects or functions can be passed to taintObjectReference. Try taintUniqueValue instead.',
    '497': 'Only objects or functions can be passed to taintObjectReference.',
    '498':
      'Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported.%s',
    '499':
      'Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.%s',
    '500':
      'React expected a headers state to exist when emitEarlyPreloads was called but did not find it. This suggests emitEarlyPreloads was called more than once per request. This is a bug in React.',
    '501':
      'The render was aborted with postpone when the shell is incomplete. Reason: %s',
    '502': 'Cannot read a Client Context from a Server Component.',
    '503': 'Cannot use() an already resolved Client Reference.',
    '504':
      'Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.',
    '505':
      'Cannot render an Async Component, Promise or React.Lazy inside React.Children. We recommend not iterating over children and just rendering them plain.',
    '506':
      'Functions are not valid as a child of Client Components. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.%s',
    '507':
      'Expected the last optional `callback` argument to be a function. Instead received: %s.',
    '508':
      'The first argument must be a React class instance. Instead received: %s.',
    '509': 'ReactDOM: Unsupported Legacy Mode API.',
    '510':
      'React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.%s',
    '511':
      'Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.',
    '512':
      "The RSC response contained a reference that doesn't exist in the temporary reference set. Always pass the matching set that was used to create the reply when parsing its response.",
    '513':
      'Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.',
    '514':
      'Cannot access %s on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.',
    '515':
      'Cannot assign to a temporary client reference from a server module.',
    '516':
      "Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
    '517':
      'Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.%s',
    '518':
      'Saw multiple hydration diff roots in a pass. This is a bug in React.',
    '519':
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.",
    '520':
      'There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.',
    '521':
      'flushSyncWork should not be called from builds that support legacy mode. This is a bug in React.',
    '522':
      'Invalid form element. requestFormReset must be passed a form that was rendered by React.',
    '523': 'The render was aborted due to being postponed.',
    '524':
      'Values cannot be passed to next() of AsyncIterables passed to Client Components.',
    '525':
      'A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.',
    '526':
      'Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.',
    '527':
      'Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:\n  - react:      %s\n  - react-dom:  %s\nLearn more: https://react.dev/warnings/version-mismatch',
    '528':
      'Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key.%s',
    '529':
      'Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key.%s',
    '530': 'The render was aborted by the server with a promise.',
    '531':
      'react-markup is not supported outside a React Server Components environment.',
    '532':
      'Attempted to render a Client Component from renderToHTML. This is not supported since it will never hydrate. Only render Server Components with renderToHTML.',
    '533':
      'Attempted to render a Server Action from renderToHTML. This is not supported since it varies by version of the app. Use a fixed URL for any forms instead.',
    '534':
      'renderToHTML should not have emitted Client References. This is a bug in React.',
    '535':
      'renderToHTML should not have emitted Server References. This is a bug in React.',
    '536':
      'Cannot pass ref in renderToHTML because they will never be hydrated.',
    '537':
      'Cannot pass event handlers (%s) in renderToHTML because the HTML will never be hydrated so they can never get called.',
    '538':
      'Cannot use state or effect Hooks in renderToHTML because this component will never be hydrated.',
    '539':
      'Binary RSC chunks cannot be encoded as strings. This is a bug in the wiring of the React streams.',
    '540':
      'String chunks need to be passed in their original shape. Not split into smaller string chunks. This is a bug in the wiring of the React streams.',
    '541': 'Compared context values must be arrays',
  };

  const paths = Object.keys(errorCodes).map((code) => ({
    params: {
      errorCode: code,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};
