import {useState, useEffect, useMemo} from "react";

export const useFetchPositions = url => {

    /*
    //todo:use if server create problem add specif headers sending request
    const requestParams = useMemo(() => {
        return {
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        }
    },[url]);

    */

    const [state, setState] = useState({data: null})

    useEffect(() => {
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            setState(state => ({data: state.data}))
            fetch(url)
                .then(data => data.json())
                .then(obj =>
                    Object.keys(obj).map(key => {
                        let newData = obj[key]
                        newData.key = key
                        return newData
                    })
                )
                .then(newData => setState({data: newData}))
                .catch(function (error) {
                    console.log(error)
                    setState({data: null})
                })
        }, 500)

        return () => clearInterval(intervalId);

    }, [useState])
    //runs on mount
    useEffect(() => () => console.log('unmount'), [])
    return state
}