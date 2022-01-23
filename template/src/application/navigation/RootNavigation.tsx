/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createRef, MutableRefObject, useEffect } from 'react';
import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

export const isMountedRef = createRef<boolean>();

export const navigationRef = createRef<NavigationContainerRef>();

export function useNavigationMounting() {
  useEffect(() => {
    (isMountedRef as MutableRefObject<boolean>).current = true;

    return () => {
      (isMountedRef as MutableRefObject<boolean>).current = false;
    };
  }, []);
}

export function navigate<T>(name: string, params?: T) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted

    navigationRef.current.navigate(name, params as T);
  } else {
    console.warn('Navigation not mounted. Cannot navigate to:', name);
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function resetRoot(routeName: string, params?: object) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.resetRoot({
      index: 0,
      routes: [{ name: routeName, params }],
    });
  } else {
    console.warn('Navigation not mounted. Cannot reset root to:', routeName);
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function setParams(params: object, routeKey?: string) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch({
      ...CommonActions.setParams(params),
      source: routeKey,
    });
  } else {
    console.warn('Navigation not mounted. Cannot set params to:', routeKey);
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function canGoBack() {
  if (!isMountedRef.current || !navigationRef.current) return false;

  return navigationRef.current.canGoBack();
}

export function goBack() {
  if (!isMountedRef.current || !navigationRef.current) return false;

  return navigationRef.current.goBack();
}

export function getRootState() {
  if (!isMountedRef.current || !navigationRef.current) return false;

  return navigationRef.current.getRootState();
}

export function getCurrentRoute() {
  if (!isMountedRef.current || !navigationRef.current) return false;

  return navigationRef.current.getCurrentRoute();
}

export function isFocused() {
  if (!isMountedRef.current || !navigationRef.current) return false;

  return navigationRef.current.isFocused;
}
