import React from 'react'
import { withBulkRequest, Item } from 'gw2-ui-bulk'

import categories from '../categories'
import docs from './200Items.docs.md'

const PAGE_NAME = '200 Items'

const Data = () => {
  return [125, 125, 125, 125]
    .map((value) => `${value + 155}`)
    .map((value) => <Item key={value} id={value} />)
}

export default {
  category: categories.PERFORMANCE,
  name: PAGE_NAME,
  docs,
  story: () => {
    return Data()
  },
}
