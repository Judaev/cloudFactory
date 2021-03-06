import {useEffect, useState} from 'react';
import {Observable} from 'rxjs';

function useObservable<T>(observable: Observable<T>, initialState: T): T {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const subscription = observable.subscribe(setState);
    return () => {
      subscription.unsubscribe();
    };
  }, [observable]);

  return state;
}

export default useObservable;
