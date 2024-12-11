"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[7992],{2363:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var a=r(4848),i=r(8453);const t={},o="Containerized WebApi",s={id:"tutorial-basics/containerization",title:"Containerized WebApi",description:"The goal of this readme is to show how to build a container WebApi image that",source:"@site/docs/tutorial-basics/containerization.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/containerization",permalink:"/docs/tutorial-basics/containerization",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/tutorial-basics/containerization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Carbon Aware WebApi",permalink:"/docs/tutorial-basics/carbon-aware-webapi"},next:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"}},c={},l=[{value:"Build and List Runtime Image",id:"build-and-list-runtime-image",level:2},{value:"Run WebApi Image",id:"run-webapi-image",level:2},{value:"Upload Image to a Container Registry",id:"upload-image-to-a-container-registry",level:2},{value:"Docker Hub",id:"docker-hub",level:3},{value:"Azure Container Registry",id:"azure-container-registry",level:3},{value:"Pipeline Integration (Github Action)",id:"pipeline-integration-github-action",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"containerized-webapi",children:"Containerized WebApi"})}),"\n",(0,a.jsx)(n.p,{children:"The goal of this readme is to show how to build a container WebApi image that\ncan be used to deploy the application into a container registry and that can be\nused later to run the service."}),"\n",(0,a.jsx)(n.h2,{id:"build-and-list-runtime-image",children:"Build and List Runtime Image"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"docker"})," to build the WebApi images. (Note: Make sure the run ",(0,a.jsx)(n.code,{children:"docker"})," at\nthe root branch)"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ./$(git rev-parse --show-cdup)/src\ndocker build -t carbon_aware:v1 -f CarbonAware.WebApi/src/Dockerfile .\n"})}),"\n",(0,a.jsxs)(n.p,{children:["List ",(0,a.jsx)(n.code,{children:"carbon_aware"})," image"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker image ls carbon_aware\nREPOSITORY     TAG       IMAGE ID       CREATED             SIZE\ncarbon_aware   v1        6293e2528bf2   About an hour ago   230MB\n"})}),"\n",(0,a.jsx)(n.h2,{id:"run-webapi-image",children:"Run WebApi Image"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Run the image using ",(0,a.jsx)(n.code,{children:"docker run"})," with host port 8000 mapped to the WebApi\nport 8080 and configure environment variable settings for\n",(0,a.jsx)(n.a,{href:"https://www.watttime.org",children:"WattTime"})," provider."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'docker run --rm -p 8000:8080 \\\n> -e DataSources__EmissionsDataSource="WattTime" \\\n> -e DataSources__ForecastDataSource="WattTime" \\\n> -e DataSources__Configurations__WattTime__Type="WattTime" \\\n> -e DataSources__Configurations__WattTime__password="username" \\\n> carbon_aware:v1\n'})}),"\n",(0,a.jsxs)(n.p,{children:["or the ",(0,a.jsx)(n.a,{href:"https://www.electricitymaps.com",children:"ElectricityMaps"})," provider"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'docker run --rm -p 8000:8080 \\\n> -e DataSources__EmissionsDataSource="ElectricityMaps" \\\n> -e DataSources__ForecastDataSource="ElectricityMaps" \\\n> -e DataSources__Configurations__ElectricityMaps__Type="ElectricityMaps" \\\n> -e DataSources__Configurations__ElectricityMaps__APITokenHeader="auth-token" \\\n> -e DataSources__Configurations__ElectricityMaps__APIToken="<YOUR_ELECTRICITYMAPS_TOKEN>" \\\n> carbon_aware:v1\n'})}),"\n",(0,a.jsxs)(n.p,{children:["or the ",(0,a.jsx)(n.a,{href:"https://www.co2signal.com/",children:"ElectricityMapsFree"})," provider"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'docker run --rm -p 8000:8080 \\\n> -e DataSources__EmissionsDataSource="ElectricityMapsFree" \\\n> -e DataSources__Configurations__ElectricityMapsFree__Type="ElectricityMapsFree" \\\n> -e DataSources__Configurations__ElectricityMapsFree__token="<YOUR_CO2SIGNAL_TOKEN>" \\\n> carbon_aware:v1\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Verify that the WebApi is responding to requests using an HTTP client tool\n(e.g. ",(0,a.jsx)(n.code,{children:"postman"}),", ",(0,a.jsx)(n.code,{children:"curl"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'curl -v -s -X \'POST\' http://localhost:8000/emissions/forecasts/batch  -H \'accept: */*\' -H \'Content-Type: application/json\' -d \'[\n    {\n        "requestedAt": "2021-11-01T00:00:00Z",\n        "dataStartAt": "2021-11-01T00:05:00Z",\n        "dataEndAt": "2021-11-01T23:55:00Z",\n        "windowSize": 5,\n        "location": "eastus"\n    }\n]\'\n...\n> POST /emissions/forecasts/batch HTTP/1.1\n> Host: localhost:8000\n...\n< HTTP/1.1 200 OK\n< Content-Type: application/json; charset=utf-8\n...\n<\n[{"generatedAt":"2021-11-01T00:00:00+00:00","optimalDataPoint":{\n    ...\n}}]\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"upload-image-to-a-container-registry",children:"Upload Image to a Container Registry"}),"\n",(0,a.jsxs)(n.p,{children:["For easy image consumption, upload it to a well-known container registry,\nself-hosted or managed. The following are examples of using\n",(0,a.jsx)(n.a,{href:"https://hub.docker.com",children:"docker hub"})," or\n",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-quickstart-task-cli",children:"Azure Container Registry"})]}),"\n",(0,a.jsx)(n.h3,{id:"docker-hub",children:"Docker Hub"}),"\n",(0,a.jsxs)(n.p,{children:["Sign in to ",(0,a.jsx)(n.a,{href:"https://hub.docker.com",children:"Docker Hub"})," and create a private (or public)\nrepository (e.g #your-username#/my-private-repo)"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Build and Push"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker login --username=your-username\ncd ./$(git rev-parse --show-cdup)/src\ndocker build -t #your-username#/my-private-repo/carbon_aware:v1 -f CarbonAware.WebApi/src/Dockerfile .\ndocker push #your-username#/my-private-repo/carbon_aware:v1\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Pull"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker login --username=your-username\ndocker pull #your-username#/my-private-repo/carbon_aware:v1\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"azure-container-registry",children:"Azure Container Registry"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Build and Push image Assuming the container registry is already created, use\nthe user's credentials push the image using ",(0,a.jsx)(n.code,{children:"docker"})," (it can be done also\nusing\n",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-quick-task",children:"Azure CLI"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker login <myacrname>.azurecr.io -u username -p <CopiedKeyFromAzurePortal>\ncd ./$(git rev-parse --show-cdup)/src\ndocker build -t <myacrname>.azurecr.io/carbon_aware:v1 -f arbonAware.WebApi/src/Dockerfile .\ndocker push <myacrname>.azurecr.io/carbon_aware:v1\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Pull image"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker login <myacrname>.azurecr.io -u username -p <CopiedKeyFromAzurePortal>\ndocker pull <myacrname>.azurecr.io/carbon_aware:v1\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"pipeline-integration-github-action",children:"Pipeline Integration (Github Action)"}),"\n",(0,a.jsxs)(n.p,{children:["To automate an image deployment from a GitHub CI/CD pipeline, the following link\nprovides detailed information on how to build a ",(0,a.jsx)(n.code,{children:"workflow"})," with all the\nnecesarily tools in order to push an image to a container registry of user's\npreference (i.e. Docker Hub)."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docs.github.com/en/actions/publishing-packages/publishing-docker-images#publishing-images-to-docker-hub",children:"Github Workflows"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var a=r(6540);const i={},t=a.createContext(i);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);