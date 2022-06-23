const content = `
<div id="SVGKit">
	<!--prev-->
	<svg class="svg_prev">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><path d="M24,0v24H0V0H24z" id="path5" fill="none" opacity="0.87"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline_1_" transform="matrix(2,0,0,2,-17.41,-12)"><path d="M 18.41,16.59 13.82,12 18.41,7.41 17,6 l -6,6 6,6 z" id="path8" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="ccccccc"/></g>
	</svg>
	
	<!--first-->
	<svg class="svg_first">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><path opacity="0.87" fill="none" d="M24,0v24H0V0H24z" id="path5"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline_1_" transform="matrix(1.9339243,0,0,1.9339243,-11.603546,-11.207091)"><path d="M 18.41,16.59 13.82,12 18.41,7.41 17,6 l -6,6 6,6 1.41,-1.41 z M 6,6 8,6 8,18 6,18 6,6 Z" id="path8" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/></g>
	</svg>
	
	<!--next-->
	<svg class="svg_next">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><path d="M24,0v24H0V0H24z" id="path5" fill="none" opacity="0.87"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline_1_" transform="matrix(-2,0,0,-2,41.41,36)"><path d="M 18.41,16.59 13.82,12 18.41,7.41 17,6 l -6,6 6,6 z" id="path8" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:nodetypes="ccccccc"/></g>
	</svg>
	
	<!--last-->
	<svg class="svg_last">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes" transform="matrix(-1,0,0,-1,24,24)"><path d="M 24,0 24,24 0,24 0,0 24,0 Z" id="path5" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0" style="opacity:0.87000002;fill:none"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline_1_" transform="matrix(-1.9339243,0,0,-1.9339243,35.603546,35.207091)"><path d="M 18.41,16.59 13.82,12 18.41,7.41 17,6 l -6,6 6,6 1.41,-1.41 z M 6,6 8,6 8,18 6,18 6,6 Z" id="path8" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/></g>
	</svg>

	<!--edit-->
	<svg class="svg_edit">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><g id="ui_x5F_spec_x5F_header_copy_3"/><path fill="none" d="M0,0h24v24H0V0z" id="path6"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline_1_" transform="matrix(1.3331482,0,0,1.3333333,-3.9994445,-4.0004174)"><g id="ui_x5F_spec_x5F_header_copy_4"/><path id="XMLID_37_" d="M 14.06,9.02 14.98,9.94 5.92,19 5,19 5,18.08 14.06,9.02 M 17.66,3 c -0.25,0 -0.51,0.1 -0.7,0.29 l -1.83,1.83 3.75,3.75 1.83,-1.83 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 18.37,3.29 C 18.17,3.09 17.92,3 17.66,3 l 0,0 z M 14.06,6.19 3,17.25 3,21 6.75,21 17.81,9.94 14.06,6.19 l 0,0 z" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/></g>
	</svg>

	<!--close-->
	<svg class="svg_close">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><path fill="none" d="M0,0h24v24H0V0z" id="path5"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline_1_" transform="matrix(1.7142857,0,0,1.7142857,-8.5714286,-8.5714286)"><path d="M 19,6.41 17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12 19,6.41 Z" id="path8" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/></g>
	</svg>

	<!--expand_more-->
	<svg class="svg_expand_more">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><path opacity="0.87" fill="none" d="M24,24H0L0,0l24,0V24z" id="path5"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline_1_" transform="matrix(2,0,0,2,-12,-12.59)"><path d="M 16.59,8.59 12,13.17 7.41,8.59 6,10 l 6,6 6,-6 -1.41,-1.41 z" id="path8" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/></g>
	</svg>

	<!--update [not used]-->
	<svg class="svg_update">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><g id="ui_x5F_spec_x5F_header_copy_3"/><g id="g6"><defs id="defs8"><rect id="SVGID_19_" width="24" height="24"/></defs><clipPath id="SVGID_2_"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#SVGID_19_" overflow="visible" id="use12"/></clipPath></g></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline" transform="matrix(1.3333334,0,0,1.3333334,-4,-4)" style="&#10;"><g id="ui_x5F_spec_x5F_header"/><g id="g16"><polygon points="15.25,15.52 16.02,14.24 12.5,12.15 12.5,8 11,8 11,13 " id="polygon18"/><path d="M 21,10 21,3 18.36,5.64 C 16.74,4.01 14.49,3 12,3 7.03,3 3,7.03 3,12 c 0,4.97 4.03,9 9,9 4.97,0 9,-4.03 9,-9 l -2,0 c 0,3.86 -3.14,7 -7,7 -3.86,0 -7,-3.14 -7,-7 0,-3.86 3.14,-7 7,-7 1.93,0 3.68,0.79 4.95,2.05 L 14,10 l 7,0 z" id="path20" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/></g></g>
	</svg>

	<!--devices-->
	<svg class="svg_devices">
		<path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none" opacity="0"/>
		<path xmlns="http://www.w3.org/2000/svg" d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
	</svg>

	<!--folder-->
	<svg class="svg_folder">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><path fill="none" d="M0,0h24v24H0V0z" id="path5"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline" transform="matrix(1.2,0,0,1.2,-2.4,-2.4)"><g id="ui_x5F_spec_x5F_header"/><path d="m 9.17,6 2,2 L 20,8 20,18 4,18 4,6 9.17,6 M 10,4 4,4 C 2.9,4 2.01,4.9 2.01,6 L 2,18 c 0,1.1 0.9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 L 22,8 C 22,6.9 21.1,6 20,6 l -8,0 -2,-2 0,0 z" id="path9" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/></g>
	</svg>

	<!--link-->
	<svg class="svg_link">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><g id="ui_x5F_spec_x5F_header_copy_3" display="none"/><path fill="none" d="M0,0h24v24H0V0z" id="path6"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline" transform="matrix(1.2,0,0,1.2,-2.4,-2.4)"><g id="ui_x5F_spec_x5F_header" display="none" style="display:none"/><g id="g10"><g id="g12"><path d="m 17,7 -4,0 0,2 4,0 c 1.65,0 3,1.35 3,3 0,1.65 -1.35,3 -3,3 l -4,0 0,2 4,0 c 2.76,0 5,-2.24 5,-5 0,-2.76 -2.24,-5 -5,-5 z" id="path14" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/><path d="M 11,15 7,15 C 5.35,15 4,13.65 4,12 4,10.35 5.35,9 7,9 l 4,0 0,-2 -4,0 c -2.76,0 -5,2.24 -5,5 0,2.76 2.24,5 5,5 l 4,0 0,-2 z" id="path16" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/></g><rect x="8" y="11" width="8" height="2" id="rect18"/></g></g>
	</svg>

	<!--event [nu]-->
	<svg class="svg_event">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><g id="ui_x5F_spec_x5F_header_copy_3"/><path fill="none" d="M0,0h24v24H0V0z" id="path9"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline" transform="matrix(1.2,0,0,1.2,-2.4,-2.4)" style="&#10;"><g id="ui_x5F_spec_x5F_header"/><g id="g21"><path d="M 19,4 18,4 18,2 16,2 16,4 8,4 8,2 6,2 6,4 5,4 C 3.89,4 3.01,4.9 3.01,6 L 3,20 c 0,1.1 0.89,2 2,2 l 14,0 c 1.1,0 2,-0.9 2,-2 L 21,6 C 21,4.9 20.1,4 19,4 Z m 0,16 -14,0 0,-10 14,0 0,10 z M 19,8 5,8 5,8 5,6 19,6 19,8 Z" id="path23" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/><rect x="12" y="13" width="5" height="5" id="rect25"/></g></g>
	</svg>

	<!--dev-->
	<svg class="svg_dev">
		<g xmlns="http://www.w3.org/2000/svg" id="Bounding_Boxes"><g id="ui_x5F_spec_x5F_header_copy_3"/><path d="M0,0h24v24H0V0z" id="path9" opacity="0"/></g>
		<g xmlns="http://www.w3.org/2000/svg" id="Outline" transform="matrix(1.2,0,0,1.2,-2.4,-2.4)"><g id="ui_x5F_spec_x5F_header"/><path d="M 9.4,16.6 4.8,12 9.4,7.4 8,6 2,12 8,18 9.4,16.6 Z m 5.2,0 L 19.2,12 14.6,7.4 16,6 l 6,6 -6,6 -1.4,-1.4 z" id="path21" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/></g>
	</svg>

	<!--back-->
	<svg class="svg_back">
		<path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0V0z" id="path4" opacity="0"/>
		<path xmlns="http://www.w3.org/2000/svg" d="M 24,10.5 5.7449999,10.5 14.13,2.1149999 12,0 0,12 12,24 14.115,21.884999 5.7449999,13.5 24,13.5 l 0,-3 z" id="path6" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/>
	</svg>
	
	<!--theme-->
	<svg class="svg_theme">
		<path xmlns="http://www.w3.org/2000/svg" d="M24 0H0v24h24z" fill="none" id="path4" display="none"/>
		<path xmlns="http://www.w3.org/2000/svg" d="M 19.034698,7.0346971 12,0 4.9653026,7.0346971 c -3.8777835,3.8777829 -3.8777835,10.1791819 0,14.0569649 C 6.9041944,23.030554 9.452097,24 12,24 c 2.547902,0 5.095806,-0.969446 7.034698,-2.908338 3.877783,-3.877783 3.877783,-10.179182 0,-14.0569649 z M 12,21.526671 c -1.988607,0 -3.865355,-0.770586 -5.2698087,-2.187469 -1.4168826,-1.416881 -2.1874677,-3.281201 -2.1874677,-5.269808 0,-1.988607 0.7705851,-3.865355 2.1874677,-5.2698083 L 12,3.5173484 12,21.526671 Z" id="path6" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:connector-curvature="0"/>
	</svg>
</div>
<style>
	#SVGKit { display: none; }
</style>`



$('#SVGKit-section').prepend(content);