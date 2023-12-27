import React, { useEffect } from "react";
import "./map.css";

const Map = () => {
  useEffect(() => {
    // 스크립트 로드 함수
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=4ba0a550beeb3c1d8ec5cc5e647b5a72&autoload=false";
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          // Kakao Maps 객체가 사용 가능한지 확인
          if (window.kakao && window.kakao.maps) {
            const container = document.getElementById("map");
            const options = {
              center: new window.kakao.maps.LatLng(37.57334475054378, 126.81402025645386),
              level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            const markerPosition = new window.kakao.maps.LatLng(
              37.57334475054378,
              126.81402025645386
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);
          }
        });
      };
      document.body.appendChild(script);
    };
    loadScript();
    return () => {
      // 스크립트 제거
      const existingScript = document.querySelector(
        "script[src='//dapi.kakao.com/v2/maps/sdk.js?appkey=4ba0a550beeb3c1d8ec5cc5e647b5a72&autoload=false']"
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className='map-body'>
      <div className='map-left-panel'>
        <div className='map-left-top'>주변 병원/운동 시설 찾기</div>
        <button className='map-newchat'>모두 보기</button>
        <button className='map-newchat2'>병원</button>
        <button className='map-newchat2'>운동</button>
        <div>
          <div className='map-card-left'>방화 병원</div>
        </div>
        <div>
          <div className='map-card-left'>공할 헬스</div>
        </div>
      </div>
      <div className='map-right-panel'>
        <div id='map' className='map-size'></div>
        <button style={{ border: "none", color: "white", backgroundColor: "#1e88e5" }}>
          🔄 현지도에서 다시 검색
        </button>
        <div>
          <div>
            <div className='map-card-right'>방화 병원 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
