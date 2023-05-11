

const Products = () => {
  return (
    <>
        <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">
                        Products
                    </h1>
                    <button className="mode-switch" title='SwitchTheme'>
                        <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
                        <defs></defs>
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                    </button>
                    <button className="app-content-headerButton">Add Product</button>
                </div>
                <div className="app-content-actions">
                    <input type="text" className="search-bar" />
                    <div className="app-content-actions-wrapper">
                        <div className="filter-button-wrapper">
                            <button className="action-button filterJsFilter">
                                <span>Filter</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                            </button>
                            <div className="filter-menu">
                                <label htmlFor="Category">Category</label>
                                <select name="" id="">
                                    <option>All Categories</option>
                                    <option>Furniture</option>                     
                                    <option>Decoration</option>
                                    <option>Kitchen</option>
                                    <option>Bathroom</option>
                                </select>
                                <label htmlFor="Status">Status</label>
                                <select name="" id="">
                                    <option>All Status</option>
                                    <option>Active</option>
                                    <option>Disabled</option>
                                </select>
                                <div className="filter-menu-buttons">
                                    <button className="filter-button-reset">
                                        Reset
                                    </button>
                                    <button className="filter-button-apply">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className="active-button list active" title='List View'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                        </button>
                        <button className="action-button grid" title='Grid View'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                        </button>
                    </div>
                </div>
                <div className="product-area-wrapper tableView">
                    <div className="products-header">
                        <div className="product-cell image">
                            Item
                            <button className="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                            </button>
                        </div>
                        <div className="product-cell category">
                            Category
                            <button className="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                            </button>
                        </div>
                        <div className="product-cell status-cell">
                            Status
                            <button className="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                            </button>
                        </div>
                        <div className="product-cell sales">
                            Sales
                            <button className="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                            </button>
                        </div>
                        <div className="product-cell stock">
                            Stock
                            <button className="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                            </button>
                        </div>
                        <div className="product-cell price">
                            Price
                            <button className="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                            </button>
                        </div>
                    </div>
                    <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product"/>
              <span>Ocean</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Furniture</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>11</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>36</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$560</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Lou</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Kitchen</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status disabled">Disabled</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>6</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>46</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$710</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Yellow</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Decoration</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>61</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>56</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$360</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Dreamy</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Bedroom</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status disabled">Disabled</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>41</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>66</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$260</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Boheme</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Furniture</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>32</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>40</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$350</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Sky</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Bathroom</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status disabled">Disabled</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>22</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>44</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$160</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Midnight</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Furniture</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>23</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>45</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$340</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Boheme</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Furniture</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>32</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>40</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$350</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Palm</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Decoration</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>24</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>46</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$60</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Forest</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Living Room</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>41</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>16</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$270</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Sand</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Living Room</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status disabled">Disabled</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>52</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>16</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$230</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Autumn</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Decoration</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>21</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>46</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$252</div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div className="product-cell image">
              <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product"/>
              <span>Boheme</span>
            </div>
          <div className="product-cell category"><span className="cell-label">Category:</span>Furniture</div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales"><span className="cell-label">Sales:</span>32</div>
          <div className="product-cell stock"><span className="cell-label">Stock:</span>40</div>
          <div className="product-cell price"><span className="cell-label">Price:</span>$350</div>
        </div>
                </div>
            </div>
    </>
  )
}

export default Products