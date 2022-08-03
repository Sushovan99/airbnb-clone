import React, { EventHandler, useEffect } from 'react';

interface PropType<RefType> {
  handler: EventHandler<any>;
  ref: React.RefObject<RefType>;
  deps: any[];
}

export function CheckOutsideClickHook<RefType>(props: PropType<RefType>) {
  useEffect(() => {
    document.addEventListener('mousedown', props.handler);
    return () => {
      document.removeEventListener('mousedown', props.handler);
    };
  }, [props.deps, props.handler]);
}
