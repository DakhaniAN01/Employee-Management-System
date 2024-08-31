import React from 'react'
import Header from './Header'

import '../../../src/App.css';
import {Helmet} from 'react-helmet';
import {ToastContainer} from 'react-toastify';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author}></meta>
                <title>{title}</title>
                
            </Helmet>
        <Header/>
        <main style={{minHeight:"90vh"}}>
          <ToastContainer/>
        {children}
        </main>
     
        
    </div>
    
  );
};
Layout.defaultProps={
  title:"Employee",
  description:"MERN stack project",
  keywords:"MongoDB, Express, React, Nodejs",
  
};

export default Layout