(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9683:function(e,t,r){Promise.resolve().then(r.bind(r,7097)),Promise.resolve().then(r.bind(r,7026)),Promise.resolve().then(r.bind(r,8569)),Promise.resolve().then(r.bind(r,782)),Promise.resolve().then(r.t.bind(r,2812,23)),Promise.resolve().then(r.t.bind(r,9282,23)),Promise.resolve().then(r.t.bind(r,7960,23))},7097:function(e,t,r){"use strict";r.d(t,{default:function(){return a}});var i=r(7437),s=r(9086);function a(){let e=(e,t)=>{var r;e.preventDefault(),null===(r=document.getElementById(t.toLowerCase()))||void 0===r||r.scrollIntoView({behavior:"smooth"})};return(0,i.jsx)(s.E.nav,{initial:{y:-100},animate:{y:0},className:"fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10",children:(0,i.jsx)("div",{className:"container mx-auto px-6 py-4",children:(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)(s.E.a,{href:"#top",onClick:t=>e(t,"top"),whileHover:{scale:1.05},className:"text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"MA"}),(0,i.jsx)("div",{className:"flex items-center gap-8",children:["Projects","Experience","Skills","Contact"].map(t=>(0,i.jsx)(s.E.a,{href:"#".concat(t.toLowerCase()),onClick:r=>e(r,t.toLowerCase()),whileHover:{y:-2},className:"text-white/70 hover:text-cyan-400 transition-colors",children:t},t))})]})})})}},7026:function(e,t,r){"use strict";r.d(t,{default:function(){return b}});var i=r(7437),s=r(2265),a=r(1448);let o={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class l{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let n=new a.iKG(-1,1,1,-1,0,1);class h extends a.u9r{constructor(){super(),this.setAttribute("position",new a.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new a.a$l([0,2,0,0,2,0],2))}}let u=new h;class d{constructor(e){this._mesh=new a.Kj0(u,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,n)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class c extends l{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof a.jyz?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=a.rDY.clone(e.uniforms),this.material=new a.jyz({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new d(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this.fsQuad.render(e)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class f extends l{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i,s;let a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,i,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class m extends l{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class v{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let r=e.getSize(new a.FM8);this._width=r.width,this._height=r.height,(t=new a.dd2(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:a.cLu})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new c(o),this.copyPass.material.blending=a.jFi,this.clock=new a.SUY}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,i=this.passes.length;t<i;t++){let i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),i.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==f&&(i instanceof f?r=!0:i instanceof m&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new a.FM8);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class p extends l{constructor(e,t,r=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new a.Ilk}render(e,t,r){let i,s;let a=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),null!==this.clearAlpha&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(i),null!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=a}}let g={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new a.Ilk(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class x extends l{constructor(e,t,r,i){super(),this.strength=void 0!==t?t:1,this.radius=r,this.threshold=i,this.resolution=void 0!==e?new a.FM8(e.x,e.y):new a.FM8(256,256),this.clearColor=new a.Ilk(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);this.renderTargetBright=new a.dd2(s,l,{type:a.cLu}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new a.dd2(s,l,{type:a.cLu});t.texture.name="UnrealBloomPass.h"+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let r=new a.dd2(s,l,{type:a.cLu});r.texture.name="UnrealBloomPass.v"+e,r.texture.generateMipmaps=!1,this.renderTargetsVertical.push(r),s=Math.round(s/2),l=Math.round(l/2)}this.highPassUniforms=a.rDY.clone(g.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new a.jyz({uniforms:this.highPassUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader}),this.separableBlurMaterials=[];let n=[3,5,7,9,11];s=Math.round(this.resolution.x/2),l=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(n[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new a.FM8(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new a.Pa4(1,1,1),new a.Pa4(1,1,1),new a.Pa4(1,1,1),new a.Pa4(1,1,1),new a.Pa4(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=a.rDY.clone(o.uniforms),this.blendMaterial=new a.jyz({uniforms:this.copyUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,blending:a.WMw,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new a.Ilk,this.oldClearAlpha=1,this.basic=new a.vBJ,this.fsQuad=new d(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(r,i);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(r,i),this.renderTargetsVertical[e].setSize(r,i),this.separableBlurMaterials[e].uniforms.invSize.value=new a.FM8(1/r,1/i),r=Math.round(r/2),i=Math.round(i/2)}render(e,t,r,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this.fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[t].uniforms.direction.value=x.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=x.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[t];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(r),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new a.jyz({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new a.FM8(.5,.5)},direction:{value:new a.FM8(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new a.jyz({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}function b(){let e=(0,s.useRef)(null),[t,r]=(0,s.useState)({width:0,height:500});return(0,s.useEffect)(()=>{let i;if(!e.current)return;let s=()=>{e.current&&r({width:e.current.offsetWidth,height:.8*window.innerHeight})};s(),window.addEventListener("resize",s);let o=new a.xsS,l=new a.cPb(60,t.width/t.height,.1,1e3),n=new a.CP7({antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setSize(t.width,t.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(n.domElement);let h=new v(n);h.addPass(new p(o,l));let u=new x(new a.FM8(t.width,t.height),2.5,.6,.65);u.strength=2,u.radius=1,h.addPass(u);let d=[new a.Ilk("#00ffff"),new a.Ilk("#00ccff"),new a.Ilk("#ff00ff"),new a.Ilk("#ff33ff"),new a.Ilk("#00ff00"),new a.Ilk("#66ff66"),new a.Ilk("#ff3399"),new a.Ilk("#ff66b3"),new a.Ilk("#4d4dff"),new a.Ilk("#6666ff"),new a.Ilk("#7700ff"),new a.Ilk("#9933ff"),new a.Ilk("#00ffcc"),new a.Ilk("#33ffdd")],c=new Float32Array(4500),f=new Float32Array(4500),m=new Float32Array(1500);for(let e=0;e<1500;e++){let t=3*e;c[t]=(Math.random()-.5)*20,c[t+1]=(Math.random()-.5)*15,c[t+2]=(Math.random()-.5)*12;let r=d[Math.floor(Math.random()*d.length)];f[t]=r.r,f[t+1]=r.g,f[t+2]=r.b,m[e]=.2*Math.random()+.1}let g=new a.u9r;g.setAttribute("position",new a.TlE(c,3)),g.setAttribute("color",new a.TlE(f,3)),g.setAttribute("size",new a.TlE(m,1));let b=new a.jyz({vertexShader:"\n        attribute float size;\n        varying vec3 vColor;\n        void main() {\n          vColor = color;\n          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n          gl_PointSize = size * (400.0 / -mvPosition.z);\n          gl_Position = projectionMatrix * mvPosition;\n        }\n      ",fragmentShader:"\n        varying vec3 vColor;\n        void main() {\n          float d = distance(gl_PointCoord, vec2(0.5));\n          if(d > 0.5) discard;\n          gl_FragColor = vec4(vColor, smoothstep(0.5, 0.1, d));\n        }\n      ",transparent:!0,vertexColors:!0}),w=new a.woe(g,b);o.add(w),l.position.z=10;let T=()=>{i=requestAnimationFrame(T);let e=.001*Date.now();w.rotation.y=.12*e,w.rotation.x=.06*e;let t=g.attributes.position.array;for(let r=0;r<1500;r++){let i=3*r;t[i+1]+=.005*Math.sin(e+r),t[i]+=.003*Math.cos(e+r),t[i+2]+=.002*Math.sin(.5*e+r)}g.attributes.position.needsUpdate=!0,h.render()};return T(),()=>{var t;window.removeEventListener("resize",s),cancelAnimationFrame(i),h.dispose(),n.dispose(),g.dispose(),b.dispose(),null===(t=e.current)||void 0===t||t.removeChild(n.domElement)}},[t.width]),(0,i.jsx)("div",{ref:e,className:"neural-network w-full",style:{height:"80vh"}})}x.BlurDirectionX=new a.FM8(1,0),x.BlurDirectionY=new a.FM8(0,1)},8569:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var i=r(7437),s=r(2265),a=r(9086);function o(){let[e,t]=(0,s.useState)({x:0,y:0});return(0,s.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[]),(0,i.jsx)(a.E.div,{className:"pointer-events-none fixed z-50 h-8 w-8 rounded-full border-2 border-cyan-400 mix-blend-difference",animate:{x:e.x-16,y:e.y-16,scale:1},transition:{type:"spring",stiffness:800,damping:30}})}},782:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var i=r(7437),s=r(4769),a=r(9086);function o(){let{scrollYProgress:e}=(0,s.v)();return(0,i.jsx)(a.E.div,{className:"fixed left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400",style:{scaleX:e}})}},7960:function(){},9282:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}},2812:function(e){e.exports={style:{fontFamily:"'__Space_Grotesk_0aa4ae', '__Space_Grotesk_Fallback_0aa4ae'",fontStyle:"normal"},className:"__className_0aa4ae",variable:"__variable_0aa4ae"}}},function(e){e.O(0,[814,689,781,971,117,744],function(){return e(e.s=9683)}),_N_E=e.O()}]);