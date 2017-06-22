'use strict';

angular.module('idistApp')
  .controller('DocumentCtrl', function ($scope, $rootScope) {

    // Load Function Section
    $scope.load = function(){
      $scope.chapters = [
        { title_kr:'박스', title_en:'Basic Box', paragraphs : [
          { title_kr:'디스플레이', title_en:'Display', description:'HTML 요소에 사용되는 상자 유형을 지정합니다.', paragraph_items:[

          ] },
          { title_kr:'위치', title_en:'Position', description:'요소에 사용되는 위치 지정 방법의 유형 (정적, 상대, 절대 또는 고정)을 지정합니다.', paragraph_items:[

          ] },
          { title_kr:'부동', title_en:'Float', description:'상자를 부동 상태로 둘 것인지 여부를 지정합니다.', paragraph_items:[

          ] },
          { title_kr:'좌우상하', title_en:'Left Right Top Bottom', description:'위치 지정된 요소의 왼쪽, 오른쪽, 위쪽, 아래쪽 위치를 지정합니다.', paragraph_items:[

          ] }
        ]},
        { title_kr:'테두리', title_en:'Border', paragraphs : [
          { title_kr:'테두리 두께', title_en:'Border Width', description:'테두리의 두께를 지정합니다.', paragraph_items:[

          ] },
          { title_kr:'테두리 반지름', title_en:'Border Radius', description:'테두리의 반지름을 지정합니다.', paragraph_items:[

          ] },
        ]},
        { title_kr:'그림자', title_en:'Border', paragraphs : [
          { title_kr:'박스 그림자', title_en:'Box Shadow', description:'상자에 그림자를 추가합니다.', paragraph_items:[

          ] },
          { title_kr:'텍스트 그림자', title_en:'Text Shadow', description:'텍스트에 그림자를 추가합니다.', paragraph_items:[

          ] },
        ]},
        { title_kr:'색상', title_en:'Color', paragraphs : [
          { title_kr:'글자 색상', title_en:'Color', description:'글자의 색상을 지정합니다.', paragraph_items:[

          ] },
          { title_kr:'배경 색상', title_en:'Background Color', description:'요소의 배경색을 지정합니다.', paragraph_items:[

          ] },
          { title_kr:'배경 그라디언트', title_en:'Background Gradient', description:'요소의 그라디언트 배경색을 지정합니다.', paragraph_items:[

          ] }
        ]},
        { title_kr:'텍스트', title_en:'Text', paragraphs : [
          { title_kr:'디스플레이', title_en:'Letter Spacing', description:'', paragraph_items:[

          ] },
          { title_kr:'텍스트 정렬', title_en:'Text Align', description:'', paragraph_items:[

          ] },
          { title_kr:'텍스트 들여 쓰기', title_en:'Text Indent', description:'', paragraph_items:[

          ] },
          { title_kr:'여백', title_en:'White Space', description:'', paragraph_items:[

          ] },
          { title_kr:'단어 끊김', title_en:'Word Break', description:'스크립트에 대한 줄 바꿈 규칙을 지정합니다.', paragraph_items:[

          ] },
          { title_kr:'단어 간격', title_en:'Word Spacing', description:'텍스트에서 단어 사이의 간격을 늘리거나 줄입니다.', paragraph_items:[

          ] },
          { title_kr:'줄 바꿈', title_en:'Word Wrap', description:'길고 깨지지 않는 단어가 깨져서 다음 줄로 감싸는 것을 허용합니다.', paragraph_items:[

          ] },
        ]},
        { title_kr:'폰트', title_en:'Font', paragraphs : [
          { title_kr:'디스플레이', title_en:'font-size', description:'폰트의 크기를 지정합니다.', paragraph_items:[

          ] },
          { title_kr:'디스플레이', title_en:'font-weight', description:'폰트의 굵기를 지정합니다.', paragraph_items:[

          ] },
        ]}
        // { title_kr:'표', title_en:'Table', paragraphs : [
        //   { title_kr:'디스플레이', title_en:'Display', description:'', paragraph_items:[
        //
        //   ] },
        // ]},
        // { title_kr:'리스트', title_en:'Lists', paragraphs : [
        //   { title_kr:'디스플레이', title_en:'Display', description:'', paragraph_items:[
        //
        //   ] },
        // ]},
        // { title_kr:'에니메이션', title_en:'Animation', paragraphs : [
        //   { title_kr:'디스플레이', title_en:'Display', description:'', paragraph_items:[
        //
        //   ] },
        // ]},
        // { title_kr:'변환', title_en:'Transform', paragraphs : [
        //   { title_kr:'디스플레이', title_en:'Display', description:'', paragraph_items:[
        //
        //   ] },
        // ]},
        // { title_kr:'전이', title_en:'Transitions', paragraphs : [
        //   { title_kr:'디스플레이', title_en:'Display', description:'', paragraph_items:[
        //
        //   ] },
        // ]}
      ];
    };

    // Initialize Function Section
    $scope.initialize = function(){
      $scope.load();
    };
    $scope.initialize();
  });
