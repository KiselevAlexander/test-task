import { DependencyList, useCallback, useEffect, useState } from "react"

export type TApiCallFunction<T> = (data?: any) => Promise<T>

export function useFetch<T>(func: TApiCallFunction<T>, dependencies: DependencyList = []) {
    const { execute, ...state } = useFetchWrapper(func, dependencies, true)

    useEffect(() => {
        execute()
    }, [ execute ])

    return { execute, ...state };
}

export function useFetcher<T>(func: TApiCallFunction<T>, dependencies: DependencyList = []) {
    return useFetchWrapper(func, dependencies, false)
}

function useFetchWrapper<T>(func: TApiCallFunction<T>, dependencies: DependencyList, initialLoading = false) {
    const [ loading, setLoading ] = useState(initialLoading)
    const [ error, setError ] = useState()
    const [ data, setData ] = useState<T | null>(null)

    const execute = useCallback(async (data?: any) => {
        setLoading(true);
        setError(undefined);
        try {
            const responseData = await func(data);
            setData(responseData);
            return responseData;
        } catch (e: any) {
            setError(e)
            setData(null)
            return Promise.reject(e)
        } finally {
            setLoading(false)
        }
    }, dependencies);

    return { loading, error, data, execute }
}
