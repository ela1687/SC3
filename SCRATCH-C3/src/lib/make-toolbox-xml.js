const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

const motion = function (isStage, targetId) {
    return `
	
	
    <category name="DEPLACER" colour="#4C97FF" secondaryColour="#3373CC"  iconURI="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgdmVyc2lvbj0iMS4xIiAgIHg9IjBweCIgICB5PSIwcHgiICAgdmlld0JveD0iMCAwIDQwIDQwIiAgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMDAgMTAwMCIgICB4bWw6c3BhY2U9InByZXNlcnZlIiAgIGlkPSJzdmc0NiIgICBzb2RpcG9kaTpkb2NuYW1lPSJpY29uX2RlcC5zdmciICAgd2lkdGg9IjQwIiAgIGhlaWdodD0iNDAiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSI+PGRlZnMgICBpZD0iZGVmczUwIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiICAgYm9yZGVyb3BhY2l0eT0iMSIgICBvYmplY3R0b2xlcmFuY2U9IjEwIiAgIGdyaWR0b2xlcmFuY2U9IjEwIiAgIGd1aWRldG9sZXJhbmNlPSIxMCIgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2NTciICAgaWQ9Im5hbWVkdmlldzQ4IiAgIHNob3dncmlkPSJmYWxzZSIgICBpbmtzY2FwZTp6b29tPSI0LjEzIiAgIGlua3NjYXBlOmN4PSI0MC43NTA2MDUiICAgaW5rc2NhcGU6Y3k9IjI0LjExNzA4NyIgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNDYiIC8+PG1ldGFkYXRhICAgaWQ9Im1ldGFkYXRhMiI+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDxyZGY6UkRGPjxjYzpXb3JrICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PHJlY3QgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzRhNmNkNDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wOTU5OTk5NjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiICAgaWQ9InJlY3Q1MDkzIiAgIHdpZHRoPSI3LjAyMTc5MTkiICAgaGVpZ2h0PSIzMC4yNjYzNDQiICAgeD0iMjUuMDUyMjcxIiAgIHk9Ii0xMC40MDA4MyIgICB0cmFuc2Zvcm09InJvdGF0ZSg0Ni4yMjQ4NDMpIiAvPjxwYXRoICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM0YTZjZDQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiM0YTZjZDQ7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAgIGQ9Im0gMjUuODI2MDgyLDE0LjQ2Nzc4MyBjIC0zLjkwNjAxOCwtNC4xODI2MTQgLTcuMDY5ODg1LC03LjYzMTA2OTIgLTcuMDMwODIsLTcuNjYzMjMzMSAwLjAzOTA3LC0wLjAzMjE2NCAzLjcwMDEyMiwtMC40MzEwNjc3IDguMTM1Njc2LC0wLjg4NjQ1MjUgNC40MzU1NTMsLTAuNDU1Mzg1IDguNDQwNjMzLC0wLjkwMzQ3MzcgOC45MDAxNzcsLTAuOTk1NzUyNiAwLjgxNDMxNSwtMC4xNjM1MTkgMC43OTM4MzIsMC4wNDY3MTEgLTAuODA2NDY1LDguMjc3MTg1MiAtMC45MDMwOTgsNC42NDQ3MyAtMS43NDQzMDksOC41NDEyNzEgLTEuODY5MzU4LDguNjU4OTg0IC0wLjEyNTA1MSwwLjExNzcxIC0zLjQyMzE5NCwtMy4yMDgxMTQgLTcuMzI5MjEsLTcuMzkwNzMxIHoiICAgaWQ9InBhdGg1MDk3IiAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9zdmc+" >
        ${isStage ? `
		
		
		
        <label text="Stage selected: no motion blocks"></label>
		
        ` : ` 
       
	   <label text=""></label>
	   
	   <block type="motion_movesteps">
            <value name="STEPS">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
        </block>
        <block type="motion_turnright" id="tr">
   
        </block>
        <block type="motion_turnleft">
            
        </block>
    
        <block type="motion_pointindirection">
            <value name="DIRECTION">
                <shadow type="math_number">
                   <field name="NUM">45</field>
                </shadow>
            </value>
        </block>
		
		<block type="motion_pointindirectiong">
            <value name="DIRECTIONG">
                <shadow type="math_number">
                   <field name="NUM">45</field>
                </shadow>
            </value>
        </block>
		
	    
        <block type="motion_gotoxy">
            <value name="X">
                <shadow id="movex" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow id="movey" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>`}
        
		
		${categorySeparator}
    </category>
    `;
};

const looks = function (isStage, targetId) {
    return `
    <category name="COMMUNIQUER" colour="#9966ff" secondaryColour="#774DCB" iconURI="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgdmVyc2lvbj0iMS4xIiAgIHdpZHRoPSI0MCIgICBoZWlnaHQ9IjQwIiAgIGlkPSJzdmcyIiAgIHNvZGlwb2RpOmRvY25hbWU9Imljb25fY29tLnN2ZyIgICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIj4gIDxtZXRhZGF0YSAgICAgaWQ9Im1ldGFkYXRhMTEiPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yayAgICAgICAgIHJkZjphYm91dD0iIj4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4gICAgICA8L2NjOldvcms+ICAgIDwvcmRmOlJERj4gIDwvbWV0YWRhdGE+ICA8c29kaXBvZGk6bmFtZWR2aWV3ICAgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGJvcmRlcm9wYWNpdHk9IjEiICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiICAgICBndWlkZXRvbGVyYW5jZT0iMTAiICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2NTciICAgICBpZD0ibmFtZWR2aWV3OSIgICAgIHNob3dncmlkPSJmYWxzZSIgICAgIGlua3NjYXBlOnpvb209IjIuNzgiICAgICBpbmtzY2FwZTpjeD0iMTI4LjM0NTMzIiAgICAgaW5rc2NhcGU6Y3k9IjQ3LjIwMzc5MSIgICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIgICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIgICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiAvPiAgPGRlZnMgICAgIGlkPSJkZWZzOCI+ICAgIDxzdHlsZSAgICAgICB0eXBlPSJ0ZXh0L2NzcyIgICAgICAgaWQ9InN0eWxlMjgyMiIgLz4gIDwvZGVmcz4gIDxwYXRoICAgICBkPSJNIDUuOTUxMTYxMywzNC4wNTA3NCA5LjA2MDY2NzcsMjYuODIxNjExIEMgNy4wOTUzNTE4LDI1LjI1MTg1NyAzLjU5NTQ3NTcsMjIuNzczMjk4IDMuNjQ5MzE5LDE4LjE0NjY1NSAzLjYyMDM3NjUsMTEuMTY5NzAxIDEyLjkxNTU0OSw2Ljc4NzkwODUgMjAuMTY2MDQ1LDYuODY5MjEyNSAyOS44MDQxNjgsNi44NTU0NDI1IDM3LjEwMDA2MiwxMi4wMDUzMzkgMzcuMDg2NjAyLDE4LjEwNTM0NiAzNy4wNzMxNDMsMjYuMzY3MjA5IDI1Ljc5Mjc3LDMxLjczNzQxOSAxNC4yNzAwOTksMjguODg3MDc3IFoiICAgICBpZD0icGF0aDQiICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojOTk2NmZmO3N0cm9rZS13aWR0aDoyLjg1NDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9zdmc+">
        ${isStage ? '' : `
		
	  
	   <label text=""></label>
		
        <block type="looks_sayforsecs">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">Message</field>
                </shadow>
            </value>
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="looks_say">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">Message</field>
                </shadow>
            </value>
        </block>		          
		<block id="askandwait" type="sensing_askandwait">
		<value name="QUESTION">
			<shadow type="text">
				<field name="TEXT">nombre</field>
			</shadow>
		</value>
	   </block>
        <block id="answer" type="sensing_answer"/>
		<block type="looks_show"/>
        <block type="looks_hide"/>
		<block type="sensing_touchingcolor">
                <value name="COLOR">
                    <shadow type="colour_picker"/>
                </value>
        </block>
		<label text=""></label>
        `}
        
        ${categorySeparator}
    </category>
    `;
};


const events = function () {
    return `
    <category name="DEMARRER" colour="#FFD500" secondaryColour="#CC9900">
        <block type="event_whenflagclicked"/>
    </category>
    `;
};



const control = function (isStage) {
    return `
	   
    <category name="CONTROLER" colour="#FFAB19" secondaryColour="#CF8B17" iconURI="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgdmVyc2lvbj0iMS4xIiAgIHdpZHRoPSI0MCIgICBoZWlnaHQ9IjQwIiAgIGlkPSJzdmcxMDQiICAgc29kaXBvZGk6ZG9jbmFtZT0iaWNvbl9jb250LnN2ZyIgICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIj4gIDxtZXRhZGF0YSAgICAgaWQ9Im1ldGFkYXRhMTA4Ij4gICAgPHJkZjpSREY+ICAgICAgPGNjOldvcmsgICAgICAgICByZGY6YWJvdXQ9IiI+ICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4gICAgICAgIDxkYzp0eXBlICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+ICAgICAgPC9jYzpXb3JrPiAgICA8L3JkZjpSREY+ICA8L21ldGFkYXRhPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiICAgICBib3JkZXJvcGFjaXR5PSIxIiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIgICAgIGdyaWR0b2xlcmFuY2U9IjEwIiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjgwIiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNjU3IiAgICAgaWQ9Im5hbWVkdmlldzEwNiIgICAgIHNob3dncmlkPSJmYWxzZSIgICAgIGlua3NjYXBlOnNuYXAtb3RoZXJzPSJmYWxzZSIgICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0iZmFsc2UiICAgICBpbmtzY2FwZTpzbmFwLW5vZGVzPSJmYWxzZSIgICAgIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJmYWxzZSIgICAgIGlua3NjYXBlOnpvb209IjMuOTY1NTE3MiIgICAgIGlua3NjYXBlOmN4PSIzNS44MDg2OTUiICAgICBpbmtzY2FwZTpjeT0iMjYiICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMTA0IiAvPiAgPGRlZnMgICAgIGlkPSJkZWZzODIiPiAgICA8ZmlsdGVyICAgICAgIGlkPSJiZXZlbEZpbHRlciIgICAgICAgeDA9Ii01MCUiICAgICAgIHkwPSItNTAlIiAgICAgICB3aWR0aD0iMiIgICAgICAgaGVpZ2h0PSIyIj4gICAgICA8ZmVHYXVzc2lhbkJsdXIgICAgICAgICByZXN1bHQ9ImJsdXItMSIgICAgICAgICBpbj0iU291cmNlQWxwaGEiICAgICAgICAgc3RkRGV2aWF0aW9uPSIxIDEiICAgICAgICAgaWQ9ImZlR2F1c3NpYW5CbHVyMiIgLz4gICAgICA8ZmVGbG9vZCAgICAgICAgIHJlc3VsdD0iZmxvb2QtMiIgICAgICAgICBmbG9vZC1jb2xvcj0iI2ZmZiIgICAgICAgICBmbG9vZC1vcGFjaXR5PSIwLjE1IiAgICAgICAgIGlkPSJmZUZsb29kNCIgLz4gICAgICA8ZmVPZmZzZXQgICAgICAgICByZXN1bHQ9Im9mZnNldC0zIiAgICAgICAgIGluPSJibHVyLTEiICAgICAgICAgZHg9IjEiICAgICAgICAgZHk9IjEiICAgICAgICAgaWQ9ImZlT2Zmc2V0NiIgLz4gICAgICA8ZmVDb21wb3NpdGUgICAgICAgICByZXN1bHQ9ImNvbXAtNCIgICAgICAgICBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgICAgICAgICBpbj0iU291cmNlQWxwaGEiICAgICAgICAgaW4yPSJvZmZzZXQtMyIgICAgICAgICBrMj0iMSIgICAgICAgICBrMz0iLTEiICAgICAgICAgaWQ9ImZlQ29tcG9zaXRlOCIgICAgICAgICBrMT0iMCIgICAgICAgICBrND0iMCIgLz4gICAgICA8ZmVDb21wb3NpdGUgICAgICAgICByZXN1bHQ9ImNvbXAtNSIgICAgICAgICBvcGVyYXRvcj0iaW4iICAgICAgICAgaW49ImZsb29kLTIiICAgICAgICAgaW4yPSJjb21wLTQiICAgICAgICAgaWQ9ImZlQ29tcG9zaXRlMTAiIC8+ICAgICAgPGZlRmxvb2QgICAgICAgICByZXN1bHQ9ImZsb29kLTYiICAgICAgICAgZmxvb2QtY29sb3I9IiMwMDAiICAgICAgICAgZmxvb2Qtb3BhY2l0eT0iMC43IiAgICAgICAgIGlkPSJmZUZsb29kMTIiIC8+ICAgICAgPGZlT2Zmc2V0ICAgICAgICAgcmVzdWx0PSJvZmZzZXQtNyIgICAgICAgICBpbj0iYmx1ci0xIiAgICAgICAgIGR4PSItMSIgICAgICAgICBkeT0iLTEiICAgICAgICAgaWQ9ImZlT2Zmc2V0MTQiIC8+ICAgICAgPGZlQ29tcG9zaXRlICAgICAgICAgcmVzdWx0PSJjb21wLTgiICAgICAgICAgb3BlcmF0b3I9ImFyaXRobWV0aWMiICAgICAgICAgaW49IlNvdXJjZUFscGhhIiAgICAgICAgIGluMj0ib2Zmc2V0LTciICAgICAgICAgazI9IjEiICAgICAgICAgazM9Ii0xIiAgICAgICAgIGlkPSJmZUNvbXBvc2l0ZTE2IiAgICAgICAgIGsxPSIwIiAgICAgICAgIGs0PSIwIiAvPiAgICAgIDxmZUNvbXBvc2l0ZSAgICAgICAgIHJlc3VsdD0iY29tcC05IiAgICAgICAgIG9wZXJhdG9yPSJpbiIgICAgICAgICBpbj0iZmxvb2QtNiIgICAgICAgICBpbjI9ImNvbXAtOCIgICAgICAgICBpZD0iZmVDb21wb3NpdGUxOCIgLz4gICAgICA8ZmVNZXJnZSAgICAgICAgIHJlc3VsdD0ibWVyZ2UtMTAiICAgICAgICAgaWQ9ImZlTWVyZ2UyNiI+ICAgICAgICA8ZmVNZXJnZU5vZGUgICAgICAgICAgIGluPSJTb3VyY2VHcmFwaGljIiAgICAgICAgICAgaWQ9ImZlTWVyZ2VOb2RlMjAiIC8+ICAgICAgICA8ZmVNZXJnZU5vZGUgICAgICAgICAgIGluPSJjb21wLTUiICAgICAgICAgICBpZD0iZmVNZXJnZU5vZGUyMiIgLz4gICAgICAgIDxmZU1lcmdlTm9kZSAgICAgICAgICAgaW49ImNvbXAtOSIgICAgICAgICAgIGlkPSJmZU1lcmdlTm9kZTI0IiAvPiAgICAgIDwvZmVNZXJnZT4gICAgPC9maWx0ZXI+ICAgIDxmaWx0ZXIgICAgICAgaWQ9ImlucHV0QmV2ZWxGaWx0ZXIiICAgICAgIHgwPSItNTAlIiAgICAgICB5MD0iLTUwJSIgICAgICAgd2lkdGg9IjIiICAgICAgIGhlaWdodD0iMiI+ICAgICAgPGZlR2F1c3NpYW5CbHVyICAgICAgICAgcmVzdWx0PSJibHVyLTEiICAgICAgICAgaW49IlNvdXJjZUFscGhhIiAgICAgICAgIHN0ZERldmlhdGlvbj0iMSAxIiAgICAgICAgIGlkPSJmZUdhdXNzaWFuQmx1cjI5IiAvPiAgICAgIDxmZUZsb29kICAgICAgICAgcmVzdWx0PSJmbG9vZC0yIiAgICAgICAgIGZsb29kLWNvbG9yPSIjZmZmIiAgICAgICAgIGZsb29kLW9wYWNpdHk9IjAuMTUiICAgICAgICAgaWQ9ImZlRmxvb2QzMSIgLz4gICAgICA8ZmVPZmZzZXQgICAgICAgICByZXN1bHQ9Im9mZnNldC0zIiAgICAgICAgIGluPSJibHVyLTEiICAgICAgICAgZHg9Ii0xIiAgICAgICAgIGR5PSItMSIgICAgICAgICBpZD0iZmVPZmZzZXQzMyIgLz4gICAgICA8ZmVDb21wb3NpdGUgICAgICAgICByZXN1bHQ9ImNvbXAtNCIgICAgICAgICBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgICAgICAgICBpbj0iU291cmNlQWxwaGEiICAgICAgICAgaW4yPSJvZmZzZXQtMyIgICAgICAgICBrMj0iMSIgICAgICAgICBrMz0iLTEiICAgICAgICAgaWQ9ImZlQ29tcG9zaXRlMzUiICAgICAgICAgazE9IjAiICAgICAgICAgazQ9IjAiIC8+ICAgICAgPGZlQ29tcG9zaXRlICAgICAgICAgcmVzdWx0PSJjb21wLTUiICAgICAgICAgb3BlcmF0b3I9ImluIiAgICAgICAgIGluPSJmbG9vZC0yIiAgICAgICAgIGluMj0iY29tcC00IiAgICAgICAgIGlkPSJmZUNvbXBvc2l0ZTM3IiAvPiAgICAgIDxmZUZsb29kICAgICAgICAgcmVzdWx0PSJmbG9vZC02IiAgICAgICAgIGZsb29kLWNvbG9yPSIjMDAwIiAgICAgICAgIGZsb29kLW9wYWNpdHk9IjAuNyIgICAgICAgICBpZD0iZmVGbG9vZDM5IiAvPiAgICAgIDxmZU9mZnNldCAgICAgICAgIHJlc3VsdD0ib2Zmc2V0LTciICAgICAgICAgaW49ImJsdXItMSIgICAgICAgICBkeD0iMSIgICAgICAgICBkeT0iMSIgICAgICAgICBpZD0iZmVPZmZzZXQ0MSIgLz4gICAgICA8ZmVDb21wb3NpdGUgICAgICAgICByZXN1bHQ9ImNvbXAtOCIgICAgICAgICBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgICAgICAgICBpbj0iU291cmNlQWxwaGEiICAgICAgICAgaW4yPSJvZmZzZXQtNyIgICAgICAgICBrMj0iMSIgICAgICAgICBrMz0iLTEiICAgICAgICAgaWQ9ImZlQ29tcG9zaXRlNDMiICAgICAgICAgazE9IjAiICAgICAgICAgazQ9IjAiIC8+ICAgICAgPGZlQ29tcG9zaXRlICAgICAgICAgcmVzdWx0PSJjb21wLTkiICAgICAgICAgb3BlcmF0b3I9ImluIiAgICAgICAgIGluPSJmbG9vZC02IiAgICAgICAgIGluMj0iY29tcC04IiAgICAgICAgIGlkPSJmZUNvbXBvc2l0ZTQ1IiAvPiAgICAgIDxmZU1lcmdlICAgICAgICAgcmVzdWx0PSJtZXJnZS0xMCIgICAgICAgICBpZD0iZmVNZXJnZTUzIj4gICAgICAgIDxmZU1lcmdlTm9kZSAgICAgICAgICAgaW49IlNvdXJjZUdyYXBoaWMiICAgICAgICAgICBpZD0iZmVNZXJnZU5vZGU0NyIgLz4gICAgICAgIDxmZU1lcmdlTm9kZSAgICAgICAgICAgaW49ImNvbXAtNSIgICAgICAgICAgIGlkPSJmZU1lcmdlTm9kZTQ5IiAvPiAgICAgICAgPGZlTWVyZ2VOb2RlICAgICAgICAgICBpbj0iY29tcC05IiAgICAgICAgICAgaWQ9ImZlTWVyZ2VOb2RlNTEiIC8+ICAgICAgPC9mZU1lcmdlPiAgICA8L2ZpbHRlcj4gICAgPGZpbHRlciAgICAgICBpZD0iaW5wdXREYXJrRmlsdGVyIiAgICAgICB4MD0iLTUwJSIgICAgICAgeTA9Ii01MCUiICAgICAgIHdpZHRoPSIyIiAgICAgICBoZWlnaHQ9IjIiPiAgICAgIDxmZUZsb29kICAgICAgICAgcmVzdWx0PSJmbG9vZC0xIiAgICAgICAgIGZsb29kLWNvbG9yPSIjMDAwIiAgICAgICAgIGZsb29kLW9wYWNpdHk9IjAuMiIgICAgICAgICBpZD0iZmVGbG9vZDU2IiAvPiAgICAgIDxmZUNvbXBvc2l0ZSAgICAgICAgIHJlc3VsdD0iY29tcC0yIiAgICAgICAgIG9wZXJhdG9yPSJpbiIgICAgICAgICBpbj0iZmxvb2QtMSIgICAgICAgICBpbjI9IlNvdXJjZUFscGhhIiAgICAgICAgIGlkPSJmZUNvbXBvc2l0ZTU4IiAvPiAgICAgIDxmZU1lcmdlICAgICAgICAgcmVzdWx0PSJtZXJnZS0zIiAgICAgICAgIGlkPSJmZU1lcmdlNjQiPiAgICAgICAgPGZlTWVyZ2VOb2RlICAgICAgICAgICBpbj0iU291cmNlR3JhcGhpYyIgICAgICAgICAgIGlkPSJmZU1lcmdlTm9kZTYwIiAvPiAgICAgICAgPGZlTWVyZ2VOb2RlICAgICAgICAgICBpbj0iY29tcC0yIiAgICAgICAgICAgaWQ9ImZlTWVyZ2VOb2RlNjIiIC8+ICAgICAgPC9mZU1lcmdlPiAgICA8L2ZpbHRlcj4gICAgPGZpbHRlciAgICAgICBpZD0iZGVzYXR1cmF0ZUZpbHRlciIgICAgICAgeDA9Ii01MCUiICAgICAgIHkwPSItNTAlIiAgICAgICB3aWR0aD0iMiIgICAgICAgaGVpZ2h0PSIyIj4gICAgICA8ZmVDb2xvck1hdHJpeCAgICAgICAgIHJlc3VsdD0iY29sb3JtYXRyaXgtMSIgICAgICAgICBpbj0iU291cmNlR3JhcGhpYyIgICAgICAgICB0eXBlPSJtYXRyaXgiICAgICAgICAgdmFsdWVzPSIwLjMzMyAwLjMzMyAwLjMzMyAwIDAgMC4zMzMgMC4zMzMgMC4zMzMgMCAwIDAuMzMzIDAuMzMzIDAuMzMzIDAgMCAwIDAgMCAxIDAiICAgICAgICAgaWQ9ImZlQ29sb3JNYXRyaXg2NyIgLz4gICAgPC9maWx0ZXI+ICAgIDxwYXRoICAgICAgIGQ9Ik0gMS41MDQsMjEgMCwxOS40OTMgNC41NjcsMCBoIDEuOTQ4IGwgLTAuNSwyLjQxOCBjIDAsMCAxLjAwMiwtMC41MDIgMy4wMDYsMCAyLjAwNiwwLjUwMyAzLjAwOCwyLjAxIDYuNTE3LDIuMDEgMy41MDgsMCA0LjQ2MywtMC41NDUgNC40NjMsLTAuNTQ1IGwgLTAuODIzLDkuODkyIGMgMCwwIC0yLjEzNywxLjAwNSAtNS4xNDQsMC42OTYgLTMuMDA3LC0wLjMwNyAtMy4wMDcsLTIuMDA3IC02LjAxNCwtMi41MSAtMy4wMDgsLTAuNTAyIC00LjUxMiwwLjUwMyAtNC41MTIsMC41MDMgeiIgICAgICAgaWQ9ImdyZWVuRmxhZyIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc3R5bGU9ImZpbGw6IzNmOGQxNSIgLz4gICAgPHBhdGggICAgICAgZD0iTSA2LjcyNCwwIEMgMy4wMSwwIDAsMi45MSAwLDYuNSAwLDguODE2IDEuMjUzLDEwLjg1IDMuMTQsMTIgSCA1LjE3IFYgMTAuNzQ0IEMgMy4zNjQsMTAuMTI2IDIuMDcsOC40NiAyLjA3LDYuNSAyLjA3LDQuMDE1IDQuMTUyLDIgNi43MjMsMiA3Ljg2MywyIDguOTA3LDIuMzk2IDkuNzE2LDMuMDUzIEwgOC4zMSw0LjEzIEMgNy44Niw0LjQ3NCA3LjkxMiw0Ljk1NiA4LjQyLDUuMjEgTCAxNSw4LjUgMTMuODU4LDAuOTkyIEMgMTMuNzc1LDAuNDQ1IDEzLjM0NCwwLjI3OCAxMi44OTUsMC42MjIgTCAxMS4zNjMsMS43OTQgQSA2LjgyNSw2LjgyNSAwIDAgMCA2LjcyMywwIFoiICAgICAgIGlkPSJ0dXJuUmlnaHQiICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+ICAgIDxwYXRoICAgICAgIGQ9Ik0gMy42MzcsMS43OTQgQSA2LjgyNSw2LjgyNSAwIDAgMSA4LjI3NywwIEMgMTEuOTksMCAxNSwyLjkxIDE1LDYuNSAxNSw4LjgxNiAxMy43NDcsMTAuODUgMTEuODYsMTIgSCA5LjgzIFYgMTAuNzQ0IEMgMTEuNjM4LDEwLjEyNiAxMi45MzMsOC40NTkgMTIuOTMzLDYuNSAxMi45MzMsNC4wMTUgMTAuODUsMiA4LjI3OSwyIDcuMTM5LDIgNi4wOTUsMi4zOTYgNS4yODYsMy4wNTMgTCA2LjY5LDQuMTMgQyA3LjE0LDQuNDc0IDcuMDg4LDQuOTU2IDYuNTgsNS4yMSBMIDAsOC41IDEuMTQyLDAuOTkyIEMgMS4yMjUsMC40NDUgMS42NTYsMC4yNzggMi4xMDUsMC42MjIgWiIgICAgICAgaWQ9InR1cm5MZWZ0IiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPiAgICA8cGF0aCAgICAgICBkPSJNIDAsMCA0LDQgMCw4IFoiICAgICAgIGlkPSJhZGRJbnB1dCIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc3R5bGU9ImZpbGw6IzExMTExMSIgLz4gICAgPHBhdGggICAgICAgZD0iTSA0LDAgViA4IEwgMCw0IFoiICAgICAgIGlkPSJkZWxJbnB1dCIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc3R5bGU9ImZpbGw6IzExMTExMSIgLz4gICAgPGcgICAgICAgaWQ9Imxvb3BBcnJvdyI+ICAgICAgPHBhdGggICAgICAgICBkPSJtIDgsMCAyLC0yIHYgLTMgaCAzIGwgLTQsLTUgLTQsNSBoIDMgdiAzIEggMCB2IDIiICAgICAgICAgaWQ9InBhdGg3NSIgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuMztmaWxsOiMwMDAwMDAiIC8+ICAgICAgPHBhdGggICAgICAgICBkPSJtIDgsMCAyLC0yIHYgLTMgaCAzIGwgLTQsLTUgLTQsNSBoIDMgdiAzIEggMCB2IDIiICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEsLTEpIiAgICAgICAgIGlkPSJwYXRoNzciICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk7ZmlsbDojZmZmZmZmIiAvPiAgICA8L2c+ICAgIDxzdHlsZSAgICAgICBpZD0ic3R5bGU4MCI+PCFbQ0RBVEFbIC5zYi1sYWJlbCB7ICAgICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBHcmFuZGUsIFZlcmRhbmEsIEFyaWFsLCBEZWphVnUgU2Fucywgc2Fucy1zZXJpZjsgICAgICBmb250LXdlaWdodDogYm9sZDsgICAgICBmaWxsOiAjZmZmOyAgICAgIGZvbnQtc2l6ZTogMTBweDsgICAgICB3b3JkLXNwYWNpbmc6ICsxcHg7ICAgIH0gICAgLnNiLW9ic29sZXRlIHsgZmlsbDogI2Q0MjgyODsgfSAgICAuc2ItbW90aW9uIHsgZmlsbDogIzRhNmNkNDsgfSAgICAuc2ItbG9va3MgeyBmaWxsOiAjOGE1NWQ3OyB9ICAgIC5zYi1zb3VuZCB7IGZpbGw6ICNiYjQyYzM7IH0gICAgLnNiLXBlbiB7IGZpbGw6ICMwZTlhNmM7ICB9ICAgIC5zYi1ldmVudHMgeyBmaWxsOiAjYzg4MzMwOyB9ICAgIC5zYi1jb250cm9sIHsgZmlsbDogI2UxYTkxYTsgfSAgICAuc2Itc2Vuc2luZyB7IGZpbGw6ICMyY2E1ZTI7IH0gICAgLnNiLW9wZXJhdG9ycyB7IGZpbGw6ICM1Y2I3MTI7IH0gICAgLnNiLXZhcmlhYmxlcyB7IGZpbGw6ICNlZTdkMTY7IH0gICAgLnNiLWxpc3QgeyBmaWxsOiAjY2M1YjIyIH0gICAgLnNiLWN1c3RvbSB7IGZpbGw6ICM2MzJkOTk7IH0gICAgLnNiLWN1c3RvbS1hcmcgeyBmaWxsOiAjNTk0N2IxOyB9ICAgIC5zYi1leHRlbnNpb24geyBmaWxsOiAjNGI0YTYwOyB9ICAgIC5zYi1ncmV5IHsgZmlsbDogIzk2OTY5NjsgfSAgICAuc2ItYmV2ZWwgeyAgICAgIGZpbHRlcjogdXJsKCNiZXZlbEZpbHRlcik7ICAgIH0gICAgLnNiLWlucHV0IHsgICAgICBmaWx0ZXI6IHVybCgjaW5wdXRCZXZlbEZpbHRlcik7ICAgIH0gICAgLnNiLWlucHV0LW51bWJlciwgICAgLnNiLWlucHV0LXN0cmluZywgICAgLnNiLWlucHV0LW51bWJlci1kcm9wZG93biB7ICAgICAgZmlsbDogI2ZmZjsgICAgfSAgICAuc2ItbGl0ZXJhbC1udW1iZXIsICAgIC5zYi1saXRlcmFsLXN0cmluZywgICAgLnNiLWxpdGVyYWwtbnVtYmVyLWRyb3Bkb3duLCAgICAuc2ItbGl0ZXJhbC1kcm9wZG93biB7ICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgICAgICBmb250LXNpemU6IDlweDsgICAgICB3b3JkLXNwYWNpbmc6IDA7ICAgIH0gICAgLnNiLWxpdGVyYWwtbnVtYmVyLCAgICAuc2ItbGl0ZXJhbC1zdHJpbmcsICAgIC5zYi1saXRlcmFsLW51bWJlci1kcm9wZG93biB7ICAgICAgZmlsbDogIzAwMDsgICAgfSAgICAuc2ItZGFya2VyIHsgICAgICBmaWx0ZXI6IHVybCgjaW5wdXREYXJrRmlsdGVyKTsgICAgfSAgICAuc2ItZGVzYXR1cmF0ZSB7ICAgICAgZmlsdGVyOiB1cmwoI2Rlc2F0dXJhdGVGaWx0ZXIpOyAgICB9ICAgIC5zYi1vdXRsaW5lIHsgICAgICBzdHJva2U6ICNmZmY7ICAgICAgc3Ryb2tlLW9wYWNpdHk6IDAuMjsgICAgICBzdHJva2Utd2lkdGg6IDI7ICAgICAgZmlsbDogbm9uZTsgICAgfSAgICAuc2ItZGVmaW5lLWhhdC1jYXAgeyAgICAgIHN0cm9rZTogIzYzMmQ5OTsgICAgICBzdHJva2Utd2lkdGg6IDE7ICAgICAgZmlsbDogIzhlMmVjMjsgICAgfSAgICAuc2ItY29tbWVudCB7ICAgICAgZmlsbDogI2ZmZmZhNTsgICAgICBzdHJva2U6ICNkMGQxZDI7ICAgICAgc3Ryb2tlLXdpZHRoOiAxOyAgICB9ICAgIC5zYi1jb21tZW50LWxpbmUgeyAgICAgIGZpbGw6ICNmZmZmODA7ICAgIH0gICAgLnNiLWNvbW1lbnQtbGFiZWwgeyAgICAgIGZvbnQtZmFtaWx5OiBIZWxldmV0aWNhLCBBcmlhbCwgRGVqYVZ1IFNhbnMsIHNhbnMtc2VyaWY7ICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgICAgZmlsbDogIzVjNWQ1ZjsgICAgICB3b3JkLXNwYWNpbmc6IDA7ICAgICAgZm9udC1zaXplOiAxMnB4OyAgICB9ICAgIC5zYi1kaWZmIHsgICAgICBmaWxsOiBub25lOyAgICAgIHN0cm9rZTogIzAwMDsgICAgfSAgICAuc2ItZGlmZi1pbnMgeyAgICAgIHN0cm9rZS13aWR0aDogMnB4OyAgICB9ICAgIC5zYi1kaWZmLWRlbCB7ICAgICAgc3Ryb2tlLXdpZHRoOiAzcHg7ICAgIH0gIF1dPjwvc3R5bGU+ICA8L2RlZnM+ICA8ZyAgICAgaWQ9ImcxMDIiICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjQzMTc0MDI0LDAsMCwwLjY0ODQ4OTQxLDEuMzMwMzE1NCwzLjc2NzE4OTgpIj4gICAgPGcgICAgICAgaWQ9ImcxMDAiPiAgICAgIDxnICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMikiICAgICAgICAgaWQ9Imc5OCI+ICAgICAgICA8cGF0aCAgICAgICAgICAgcGF0aD0iTSAwIDMgTCAzIDAgTCAxMyAwIEwgMTYgMyBMIDI0IDMgTCAyNyAwIEwgODAgMCBMIDgzIDMsTCA4MyAxOCBMIDgwIDIxIEwgNDIgMjEgTCAzOSAyNCBMIDMxIDI0IEwgMjggMjEgTCAxNyAyMSBMIDE1IDIzLEwgMTUgMzEgTCAxNyAzMyBMIDgwIDMzIEwgODMgMzYsTCA4MyA0NiBMIDgwIDQ5IEwgMjcgNDkgTCAyNCA1MiBMIDE2IDUyIEwgMTMgNDkgTCAzIDQ5IEwgMCA0NiIgICAgICAgICAgIGQ9Ik0gMCwzIDMsMCBoIDEwIGwgMywzIGggOCBsIDMsLTMgaCA1MyBsIDMsMyB2IDE1IGwgLTMsMyBIIDQyIGwgLTMsMyBIIDMxIEwgMjgsMjEgSCAxNyBsIC0yLDIgdiA4IGwgMiwyIGggNjMgbCAzLDMgdiAxMCBsIC0zLDMgSCAyNyBsIC0zLDMgSCAxNiBMIDEzLDQ5IEggMyBMIDAsNDYiICAgICAgICAgICBjbGFzcz0ic2ItY29udHJvbCBzYi1iZXZlbCIgICAgICAgICAgIGlkPSJwYXRoODQiICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICAgICAgc3R5bGU9ImZpbGw6I2UxYTkxYTtmaWx0ZXI6dXJsKCNiZXZlbEZpbHRlcikiIC8+ICAgICAgICA8dGV4dCAgICAgICAgICAgeD0iMCIgICAgICAgICAgIHk9IjEwIiAgICAgICAgICAgY2xhc3M9InNiLWxhYmVsICIgICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYsNCkiICAgICAgICAgICBpZD0idGV4dDg2IiAgICAgICAgICAgc3R5bGU9ImZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEwcHg7Zm9udC1mYW1pbHk6J0x1Y2lkYSBHcmFuZGUnLCBWZXJkYW5hLCBBcmlhbCwgJ0RlamFWdSBTYW5zJywgc2Fucy1zZXJpZjt3b3JkLXNwYWNpbmc6MXB4O2ZpbGw6I2ZmZmZmZiI+cmVwZWF0PC90ZXh0PiAgICAgICAgPGcgICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4LDMpIiAgICAgICAgICAgaWQ9Imc5MiI+ICAgICAgICAgIDxwYXRoICAgICAgICAgICAgIHBhdGg9Ik0sNi41LDAsTCA5LjUgMCBBIDYuNSA2LjUgMCAwIDEgOS41IDEzLEwgNi41IDEzIEEgNi41IDYuNSAwIDAgMSA2LjUgMCxaIiAgICAgICAgICAgICBkPSJtIDYuNSwwIGggMyBhIDYuNSw2LjUgMCAwIDEgMCwxMyBoIC0zIGEgNi41LDYuNSAwIDAgMSAwLC0xMyB6IiAgICAgICAgICAgICBjbGFzcz0ic2ItaW5wdXQgc2ItaW5wdXQtbnVtYmVyIiAgICAgICAgICAgICBpZD0icGF0aDg4IiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbHRlcjp1cmwoI2lucHV0QmV2ZWxGaWx0ZXIpIiAvPiAgICAgICAgICA8dGV4dCAgICAgICAgICAgICB4PSIwIiAgICAgICAgICAgICB5PSIxMCIgICAgICAgICAgICAgY2xhc3M9InNiLWxhYmVsIHNiLWxpdGVyYWwtbnVtYmVyIiAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1KSIgICAgICAgICAgICAgaWQ9InRleHQ5MCIgICAgICAgICAgICAgc3R5bGU9ImZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6OXB4O2ZvbnQtZmFtaWx5OidMdWNpZGEgR3JhbmRlJywgVmVyZGFuYSwgQXJpYWwsICdEZWphVnUgU2FucycsIHNhbnMtc2VyaWY7d29yZC1zcGFjaW5nOjA7ZmlsbDojMDAwMDAwIj40PC90ZXh0PiAgICAgICAgPC9nPiAgICAgICAgPHVzZSAgICAgICAgICAgeGxpbms6aHJlZj0iI2xvb3BBcnJvdyIgICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY4LDQ2KSIgICAgICAgICAgIGlkPSJ1c2U5NCIgICAgICAgICAgIHg9IjAiICAgICAgICAgICB5PSIwIiAgICAgICAgICAgd2lkdGg9IjEwMCUiICAgICAgICAgICBoZWlnaHQ9IjEwMCUiIC8+ICAgICAgICA8ZyAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUsMjEpIiAgICAgICAgICAgaWQ9Imc5NiIgLz4gICAgICA8L2c+ICAgIDwvZz4gIDwvZz4gIDxyZWN0ICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2UwYTgxNTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzRhNmNkNDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiICAgICBpZD0icmVjdDQ1ODciICAgICB3aWR0aD0iMTYuOTczNzE5IiAgICAgaGVpZ2h0PSI3LjI1NDQ3MjMiICAgICB4PSIzLjg0NDM3OTIiICAgICB5PSI3LjQzMDMwOTgiIC8+PC9zdmc+">
	  
	   
	   <label text=""></label>
        <block type="control_wait">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">4</field>
                </shadow>
            </value>
        </block>
        <block id="forever" type="control_forever"/>
       
        <block type="control_if"/>
        <block type="control_if_else"/>
        
        <block type="control_stop"/>
        
        ${isStage ? `
            
        ` : `
            
        `}
        ${categorySeparator}
    </category>
    `;
};


const operators = function () {
    return `
    <category name="CALCULER" colour="#40BF4A" secondaryColour="#389438" iconURI="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgdmVyc2lvbj0iMS4xIiAgIHg9IjBweCIgICB5PSIwcHgiICAgdmlld0JveD0iMCAwIDQwIDQwIiAgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMDAgMTAwMCIgICB4bWw6c3BhY2U9InByZXNlcnZlIiAgIGlkPSJzdmc0NiIgICBzb2RpcG9kaTpkb2NuYW1lPSJpY29uX2NhbGN1bC5zdmciICAgd2lkdGg9IjQwIiAgIGhlaWdodD0iNDAiICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSI+PGRlZnMgICBpZD0iZGVmczUwIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcgICBwYWdlY29sb3I9IiNmZmZmZmYiICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiICAgYm9yZGVyb3BhY2l0eT0iMSIgICBvYmplY3R0b2xlcmFuY2U9IjEwIiAgIGdyaWR0b2xlcmFuY2U9IjEwIiAgIGd1aWRldG9sZXJhbmNlPSIxMCIgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2NTciICAgaWQ9Im5hbWVkdmlldzQ4IiAgIHNob3dncmlkPSJmYWxzZSIgICBpbmtzY2FwZTp6b29tPSI0LjEzIiAgIGlua3NjYXBlOmN4PSI3Ny41NTQ0NzkiICAgaW5rc2NhcGU6Y3k9IjI0LjExNzA4NyIgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNDYiIC8+PG1ldGFkYXRhICAgaWQ9Im1ldGFkYXRhMiI+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDxyZGY6UkRGPjxjYzpXb3JrICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGcgICBpZD0iZzQ0IiAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM4NzcxNTUsMCwwLDAuMDM4NjQ1MzgsMC44MjcxNzUzNCwwLjkxNjM2NzkpIiAgIHN0eWxlPSJmaWxsOiM1OWMwNTk7ZmlsbC1vcGFjaXR5OjEiPjxnICAgICBpZD0iZzEyIiAgICAgc3R5bGU9ImZpbGw6IzU5YzA1OTtmaWxsLW9wYWNpdHk6MSI+PHBhdGggICAgICAgZD0ibSA2MDAuOSw0NjIuMyBoIDMyNC4zIGMgMzUuOCwwIDY0LjksLTI5IDY0LjksLTY0LjkgViA3My4yIGMgMCwtMzUuOCAtMjksLTY0LjkgLTY0LjksLTY0LjkgSCA2MDAuOSBjIC0zNS44LDAgLTY0LjksMjkgLTY0LjksNjQuOSB2IDMyNC4zIGMgMCwzNS44IDI5LjEsNjQuOCA2NC45LDY0LjggeiBtIDQ5LjEsLTI1MyBoIDg2LjkgdiAtODYuOSBjIDAsLTE0LjQgMTEuNywtMjYuMSAyNi4xLC0yNi4xIDE0LjQsMCAyNi4xLDExLjcgMjYuMSwyNi4xIHYgODYuOSBIIDg3NiBjIDE0LjQsMCAyNi4xLDExLjcgMjYuMSwyNi4xIDAsMTQuNCAtMTEuNywyNi4xIC0yNi4xLDI2LjEgaCAtODYuOSB2IDg2LjkgYyAwLDE0LjQgLTExLjcsMjYgLTI2LjEsMjYgLTE0LjQsMCAtMjYuMSwtMTEuNyAtMjYuMSwtMjYgViAyNjEuNSBIIDY1MCBjIC0xNC40LDAgLTI2LjEsLTExLjcgLTI2LjEsLTI2LjEgMC4xLC0xNC41IDExLjcsLTI2LjEgMjYuMSwtMjYuMSB6IiAgICAgICBpZD0icGF0aDQiICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiM1OWMwNTk7ZmlsbC1vcGFjaXR5OjEiIC8+PHBhdGggICAgICAgZD0ibSA3NC45LDk5MS42IGggMzI0LjMgYyAzNS44LDAgNjQuOSwtMjkgNjQuOSwtNjQuOSBWIDYwMi41IGMgMCwtMzUuOCAtMjksLTY0LjkgLTY0LjksLTY0LjkgSCA3NC45IGMgLTM1LjgsMCAtNjQuOSwyOSAtNjQuOSw2NC45IHYgMzI0LjMgYyAwLDM1LjggMjksNjQuOCA2NC45LDY0LjggeiBtIDYzLjgsLTMyNS4zIGMgMTAuMiwtMTAuMiAyNi43LC0xMC4yIDM2LjksMCBsIDYxLjQsNjEuNSA2MS41LC02MS41IGMgMTAuMiwtMTAuMiAyNi43LC0xMC4yIDM2LjksMCAxMC4yLDEwLjIgMTAuMiwyNi43IDAsMzYuOSBsIC02MS41LDYxLjUgNjEuNSw2MS40IGMgMTAuMiwxMC4yIDEwLjIsMjYuNyAwLDM2LjkgLTEwLjIsMTAuMiAtMjYuNywxMC4yIC0zNi45LDAgTCAyMzcsODAxLjUgMTc1LjUsODYzIGMgLTEwLjIsMTAuMiAtMjYuNywxMC4yIC0zNi45LDAgLTEwLjIsLTEwLjIgLTEwLjIsLTI2LjcgMCwtMzYuOSBMIDIwMCw3NjQuNyAxMzguNiw3MDMuMiBjIC0xMC4xLC0xMC4yIC0xMC4xLC0yNi43IDAuMSwtMzYuOSB6IiAgICAgICBpZD0icGF0aDYiICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiM1OWMwNTk7ZmlsbC1vcGFjaXR5OjEiIC8+PHBhdGggICAgICAgZD0ibSA3NC45LDQ2Mi4zIGggMzI0LjMgYyAzNS44LDAgNjQuOSwtMjkgNjQuOSwtNjQuOSBWIDczLjIgYyAwLC0zNS44IC0yOSwtNjQuOSAtNjQuOSwtNjQuOSBIIDc0LjkgQyAzOSw4LjQgMTAsMzcuNCAxMCw3My4yIHYgMzI0LjMgYyAwLDM1LjggMjksNjQuOCA2NC45LDY0LjggeiBtIDY0LjgsLTI0OC42IGggMTk0LjYgYyAxMS45LDAgMjEuNiw5LjcgMjEuNiwyMS42IDAsMTEuOSAtOS43LDIxLjYgLTIxLjYsMjEuNiBIIDEzOS43IGMgLTExLjksMCAtMjEuNiwtOS43IC0yMS42LC0yMS42IDAsLTExLjkgOS43LC0yMS42IDIxLjYsLTIxLjYgeiIgICAgICAgaWQ9InBhdGg4IiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAgICAgICBzdHlsZT0iZmlsbDojNTljMDU5O2ZpbGwtb3BhY2l0eToxIiAvPjxwYXRoICAgICAgIGQ9Im0gNjAwLjksOTkxLjYgaCAzMjQuMyBjIDM1LjgsMCA2NC45LC0yOSA2NC45LC02NC45IFYgNjAyLjUgYyAwLC0zNS44IC0yOSwtNjQuOSAtNjQuOSwtNjQuOSBIIDYwMC45IGMgLTM1LjgsMCAtNjQuOSwyOSAtNjQuOSw2NC45IHYgMzI0LjMgYyAwLDM1LjggMjkuMSw2NC44IDY0LjksNjQuOCB6IE0gNzYzLDg5OS45IGMgLTE3LjksMCAtMzIuNCwtMTQuNSAtMzIuNCwtMzIuNCAwLC0xNy45IDE0LjUsLTMyLjQgMzIuNCwtMzIuNCAxNy45LDAgMzIuNCwxNC41IDMyLjQsMzIuNCAwLDE3LjkgLTE0LjQsMzIuNCAtMzIuNCwzMi40IHogbSAwLC0yMzcuOCBjIDE3LjksMCAzMi40LDE0LjUgMzIuNCwzMi40IDAsMTcuOSAtMTQuNSwzMi41IC0zMi40LDMyLjUgLTE3LjksMCAtMzIuNCwtMTQuNSAtMzIuNCwtMzIuNCAwLC0xOCAxNC41LC0zMi41IDMyLjQsLTMyLjUgeiBtIC05Ny4zLDEwMCBoIDE5NC42IGMgMTEuOSwwIDIxLjYsOS43IDIxLjYsMjEuNiAwLDExLjkgLTkuNywyMS42IC0yMS42LDIxLjYgSCA2NjUuNyBjIC0xMS45LDAgLTIxLjYsLTkuNyAtMjEuNiwtMjEuNiAwLC0xMS45IDkuNywtMjEuNiAyMS42LC0yMS42IHoiICAgICAgIGlkPSJwYXRoMTAiICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHN0eWxlPSJmaWxsOiM1OWMwNTk7ZmlsbC1vcGFjaXR5OjEiIC8+PC9nPjxnICAgICBpZD0iZzE0IiAgICAgc3R5bGU9ImZpbGw6IzU5YzA1OTtmaWxsLW9wYWNpdHk6MSIgLz48ZyAgICAgaWQ9ImcxNiIgICAgIHN0eWxlPSJmaWxsOiM1OWMwNTk7ZmlsbC1vcGFjaXR5OjEiIC8+PGcgICAgIGlkPSJnMTgiICAgICBzdHlsZT0iZmlsbDojNTljMDU5O2ZpbGwtb3BhY2l0eToxIiAvPjxnICAgICBpZD0iZzIwIiAgICAgc3R5bGU9ImZpbGw6IzU5YzA1OTtmaWxsLW9wYWNpdHk6MSIgLz48ZyAgICAgaWQ9ImcyMiIgICAgIHN0eWxlPSJmaWxsOiM1OWMwNTk7ZmlsbC1vcGFjaXR5OjEiIC8+PGcgICAgIGlkPSJnMjQiICAgICBzdHlsZT0iZmlsbDojNTljMDU5O2ZpbGwtb3BhY2l0eToxIiAvPjxnICAgICBpZD0iZzI2IiAgICAgc3R5bGU9ImZpbGw6IzU5YzA1OTtmaWxsLW9wYWNpdHk6MSIgLz48ZyAgICAgaWQ9ImcyOCIgICAgIHN0eWxlPSJmaWxsOiM1OWMwNTk7ZmlsbC1vcGFjaXR5OjEiIC8+PGcgICAgIGlkPSJnMzAiICAgICBzdHlsZT0iZmlsbDojNTljMDU5O2ZpbGwtb3BhY2l0eToxIiAvPjxnICAgICBpZD0iZzMyIiAgICAgc3R5bGU9ImZpbGw6IzU5YzA1OTtmaWxsLW9wYWNpdHk6MSIgLz48ZyAgICAgaWQ9ImczNCIgICAgIHN0eWxlPSJmaWxsOiM1OWMwNTk7ZmlsbC1vcGFjaXR5OjEiIC8+PGcgICAgIGlkPSJnMzYiICAgICBzdHlsZT0iZmlsbDojNTljMDU5O2ZpbGwtb3BhY2l0eToxIiAvPjxnICAgICBpZD0iZzM4IiAgICAgc3R5bGU9ImZpbGw6IzU5YzA1OTtmaWxsLW9wYWNpdHk6MSIgLz48ZyAgICAgaWQ9Imc0MCIgICAgIHN0eWxlPSJmaWxsOiM1OWMwNTk7ZmlsbC1vcGFjaXR5OjEiIC8+PGcgICAgIGlkPSJnNDIiICAgICBzdHlsZT0iZmlsbDojNTljMDU5O2ZpbGwtb3BhY2l0eToxIiAvPjwvZz48L3N2Zz4=">
	     <label text=""></label>
        <block type="operator_add">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_subtract">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_multiply">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_divide">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
      
       
        <block type="operator_lt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="operator_equals">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="operator_gt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="operator_join">
            <value name="STRING1">
                <shadow type="text">
                    <field name="TEXT">Jean</field>
                </shadow>
            </value>
            <value name="STRING2">
                <shadow type="text">
                    <field name="TEXT">Paul</field>
                </shadow>
            </value>
        </block>
        <block type="operator_mod">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};


const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isStage - Whether the toolbox is for a stage-type target.
 * @param {?string} targetId - The current editing target
 * @param {string?} categoriesXML - null for default toolbox, or an XML string with <category> elements.
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (isStage, targetId, categoriesXML) {
    const gap = [categorySeparator];

    const everything = [
        xmlOpen,
        motion(isStage, targetId), gap,
		control(isStage, targetId), gap,
        operators(isStage, targetId), gap,
        looks(isStage, targetId), gap
       
    ];

    if (categoriesXML) {
        everything.push(gap, categoriesXML);
    }

    everything.push(xmlClose);
    return everything.join('\n');
};

export default makeToolboxXML;



