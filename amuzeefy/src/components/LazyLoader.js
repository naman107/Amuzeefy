import React from 'react'
import { lazyLoaderGifString } from '../Utils/Strings/strings'

const LazyLoader = () => {
    return (
        <div>
            <img src={lazyLoaderGifString.LAZY_LOADER_GIF} />
        </div>
    )
}

export default LazyLoader
