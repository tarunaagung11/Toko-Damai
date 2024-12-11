import React from "react";

const Contact = () => {
  return (
    <div className="mapouter flex gap-2">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=toko damai lepo-lepo, kendari&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        />
        <a href="https://embed-googlemap.com">google maps embed</a>
      </div>
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=toko damai lepo-lepo, kendari&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        />
        <a href="https://embed-googlemap.com">google maps embed</a>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}",
        }}
      />
    </div>
  );
};

export default Contact;
