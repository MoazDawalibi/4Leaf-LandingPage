import { Spin } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Loading = () => {
    const {t} = useTranslation();
  return (
    <div className='loading'>
        {/* <p>
            {t('Loading')} ...
        </p> */}
        <Spin />
    </div>
  )
}

export default Loading