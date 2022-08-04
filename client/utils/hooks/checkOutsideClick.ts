import React, { EventHandler, useEffect } from 'react';

interface PropType<RefType, DepsType> {
  handler: EventHandler<any>;
  ref: React.RefObject<RefType>;
  deps?: DepsType[];
}

export function CheckOutsideClickHook<RefType, DepsType>(
  props: PropType<RefType, DepsType>
) {
  useEffect(() => {
    document.addEventListener('mousedown', props.handler);
    return () => {
      document.removeEventListener('mousedown', props.handler);
    };
  }, [props.deps, props.handler]);
}
