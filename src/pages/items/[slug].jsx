import { useEffect, useState, lazy } from 'react';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

export default function ItemsPage() {
  const { itemsResponse } = useSelector((state) => ({
    itemsResponse: state.search.itemsResponse,
  }));
  const [filteredItems, setFilteredItems] = useState([]);
  const [showFilteredItems, setShowFilteredItems] = useState(false);
  const [itemDetail, setItemDetail] = useState({});
  const [showItemDetail, setShowItemDetail] = useState(false);
  const router = useRouter();

  const getFilteredItems = (query) => {
    query = query.toLowerCase();
    
    return itemsResponse.data.items.filter(item => {
      const itemName = item.name.toLowerCase();
      const itemDescription = item.description.toLowerCase();
      
      return itemName.includes(query) || itemDescription.includes(query);
    });
  };

  const getItemDetail = (id) => {
    return itemsResponse.data.items.filter(item => {
      return item.includes(id);
    });
  };
  
  useEffect(() => {
    if(router.query.slug){
      setItemDetail(getItemDetail(router.query.slug));
      setShowItemDetail(true);
    }
  }, [itemsResponse]);

  return showFilteredItems ? (
    filteredItems.forEach((item, index) => (
      <div key={index}>
        <h1>{item.name}</h1>
      </div>
    ))
  ) : showItemDetail ? (
    <div key={itemDetail.id}>
        <h1>{itemDetail.name}</h1>
        <h1>{itemDetail.description}</h1>
      </div>
  ) : (
    <div>Item not found</div>
  )
}