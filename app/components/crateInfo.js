const green = {
	lightColor: '#61F9CE',
	darkColor: '#0AB3A2',
	topPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI0NCAxNjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlJlY3RhbmdsZSA3MyBDb3B5IDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iUHJvdG90eXBlLTEtR3JvdXAtQ29weS05IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUwLjAwMDAwMCwgLTY0Ni4wMDAwMDApIiBmaWxsPSIjNjFGOUNGIj4KICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS03My1Db3B5LTItKy1SZWN0YW5nbGUtNzMtQ29weS0zLSstT3ZhbC0xLUNvcHktNS1Db3B5LUNvcHktQ29weS1Db3B5IiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDMuMDAwMDAwLCA2NDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy44NDU5MTI0Niw3NS45OTQzOTkzIEM3Ljg0NTkxMjQ2LDY0LjMyNzI5NDggOS44MTQ2NzM1Miw0MC44NzgyNzYyIDkuODE0NjczNTIsNDAuODc4Mjc2MiBDMTEuNTczODgwOCwxNi42NDQ5NzM0IDMyLjY1MDkzMywtMS40ODUxOTM5NyA1Ni44ODQyMDg0LDAuMjk1NTAzODQ3IEM1Ni44ODQyMDg0LDAuMjk1NTAzODQ3IDEwNC42NjQzNTQsNC4yODk0NTczMiAxMjguNSw0LjI4OTQ1NzMyIEMxNTIuMzM1NjQ2LDQuMjg5NDU3MzIgMjAwLjEzNDQxOCwwLjI5NDE3NDU4OSAyMDAuMTM0NDE4LDAuMjk0MTc0NTg5IEMyMjQuMzYwNzEsLTEuNTI1MTQ3OCAyNDUuNzY5NzIzLDE2LjYyMDE2NTYgMjQ3Ljg0ODI0Nyw0MC44MjQ0NjY1IEMyNDcuODQ4MjQ3LDQwLjgyNDQ2NjUgMjUwLjIzMzk0Myw2NC4zMjcyOTQxIDI1MC4yMzM5NDMsNzUuOTk0Mzk4NiBDMjUwLjIzMzk0Myw4Ny42NjE1MDMgMjQ3Ljg0NzEzNCwxMTEuMTgyMDczIDI0Ny44NDcxMzQsMTExLjE4MjA3MyBDMjQ1LjcyMjQyLDEzNS4zODIwNDYgMjI0LjM0OTA2NywxNTYuNTE0ODA2IDIwMC4xMTU3OTIsMTU4LjI5NTUwNCBDMjAwLjExNTc5MiwxNTguMjk1NTA0IDE1Mi4zMzU2NDYsMTYyLjI4OTQ1NyAxMjguNSwxNjIuMjg5NDU3IEMxMDQuNjY0MzU0LDE2Mi4yODk0NTcgNTYuODY1NTgxNiwxNTguMjk0MTc1IDU2Ljg2NTU4MTYsMTU4LjI5NDE3NSBDMzIuNjM5Mjg5OCwxNTYuNDc0ODUyIDExLjUzNTExMDQsMTM1LjM1MzEwNyA5LjgxNDY3MzUyLDExMS4xMTQ4MDEgQzkuODE0NjczNTIsMTExLjExNDgwMSA3Ljg0NTkxMjQ2LDg3LjY2MTUwMzcgNy44NDU5MTI0Niw3NS45OTQzOTkzIFoiIGlkPSJSZWN0YW5nbGUtNzMtQ29weS0zIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
	bottomPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI1OCAxOTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlJlY3RhbmdsZSA3MyBDb3B5IDIgKyBSZWN0YW5nbGUgNzMgQ29weSAzICsgT3ZhbCAxIENvcHkgNSBDb3B5IENvcHkgQ29weSBDb3B5IENvcHkgQ29weSBDb3B5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9IlByb3RvdHlwZS0xLUdyb3VwLUNvcHktOSIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY3My4wMDAwMDAsIC0xMzYuMDAwMDAwKSIgZmlsbD0iIzBBQjRBMiI+CiAgICAgICAgICAgIDxnIGlkPSJSZWN0YW5nbGUtNzMtQ29weS0yLSstUmVjdGFuZ2xlLTczLUNvcHktMy0rLU92YWwtMS1Db3B5LTUtQ29weS1Db3B5LUNvcHktQ29weS1Db3B5LUNvcHktQ29weSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjczLjAwMDAwMCwgMTM2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuMDYzNjU1ODUzMyw5MyBDMC4wNjM2NTU4NTMzLDc2LjY2MzY3OCAyLjU1NzA5MDMyLDQzLjkwMDE1MDMgMi41NTcwOTAzMiw0My45MDAxNTAzIEM0LjE4MjQxNDQ2LDE5LjY1NDc2NjggMjUuMTg5NTA1MiwwIDQ5LjQ5NzYwODIsMCBMMjA3LjUwMjM5MiwwIEMyMzEuODAxNiwwIDI1Mi45NDMyNjEsMTkuNjM2Nzk1NyAyNTQuNjM5MjI2LDQzLjg4NDQ5MDQgQzI1NC42MzkyMjYsNDMuODg0NDkwNCAyNTcuMzAwOTQ5LDc2LjY2MzY3OCAyNTcuMzAwOTQ5LDkzIEMyNTcuMzAwOTQ5LDEwOS4zMzYzMjIgMjU0LjYzODE2NywxNDIuMTMxMTY5IDI1NC42MzgxNjcsMTQyLjEzMTE2OSBDMjUyLjkwNTAwNSwxNjYuMzU5MjU1IDIzMS44MjQ0NDksMTg2Ljg3Mjk3NSAyMDcuNTQ2MjI5LDE4Ny45MDI5NjMgQzIwNy41NDYyMjksMTg3LjkwMjk2MyAxNTMuODgzNDE1LDE5MC40NjIzNzIgMTI4LjUsMTkwLjQ2MjM3MiBDMTAzLjExNjU4NSwxOTAuNDYyMzcyIDQ5LjQ1Mzc3MDcsMTg3LjkwMjk2MyA0OS40NTM3NzA3LDE4Ny45MDI5NjMgQzI1LjE3ODc3MzUsMTg2Ljg1MTk4NiA0LjE0NTcwMzI3LDE2Ni4zMzcyNzggMi41NTcwOTAzMiwxNDIuMDk5ODUgQzIuNTU3MDkwMzIsMTQyLjA5OTg1IDAuMDYzNjU1ODUzMywxMDkuMzM2MzIyIDAuMDYzNjU1ODUzMyw5MyBaIiBpZD0iUmVjdGFuZ2xlLTczLUNvcHktMiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
}

const yellow = {
	lightColor: '#FFD687',
	darkColor: '#FFAC53',
	topPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI0NCAxNjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlJlY3RhbmdsZSA3MyBDb3B5IDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iUHJvdG90eXBlLTEtR3JvdXAtQ29weS05IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTk4LjAwMDAwMCwgLTk4LjAwMDAwMCkiIGZpbGw9IiNGRkQ2ODciPgogICAgICAgICAgICA8ZyBpZD0iUmVjdGFuZ2xlLTczLUNvcHktMi0rLVJlY3RhbmdsZS03My1Db3B5LTMtKy1PdmFsLTEtQ29weS01LUNvcHktQ29weS1Db3B5LUNvcHktQ29weS1Db3B5LUNvcHktQ29weS1Db3B5LUNvcHkiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk5MS4wMDAwMDAsIDk4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuODQ1OTEyNDYsNzUuOTk0Mzk5MyBDNy44NDU5MTI0Niw2NC4zMjcyOTQ4IDkuODE0NjczNTIsNDAuODc4Mjc2MiA5LjgxNDY3MzUyLDQwLjg3ODI3NjIgQzExLjU3Mzg4MDgsMTYuNjQ0OTczNCAzMi42NTA5MzMsLTEuNDg1MTkzOTcgNTYuODg0MjA4NCwwLjI5NTUwMzg0NyBDNTYuODg0MjA4NCwwLjI5NTUwMzg0NyAxMDQuNjY0MzU0LDQuMjg5NDU3MzIgMTI4LjUsNC4yODk0NTczMiBDMTUyLjMzNTY0Niw0LjI4OTQ1NzMyIDIwMC4xMzQ0MTgsMC4yOTQxNzQ1ODkgMjAwLjEzNDQxOCwwLjI5NDE3NDU4OSBDMjI0LjM2MDcxLC0xLjUyNTE0NzggMjQ1Ljc2OTcyMywxNi42MjAxNjU2IDI0Ny44NDgyNDcsNDAuODI0NDY2NSBDMjQ3Ljg0ODI0Nyw0MC44MjQ0NjY1IDI1MC4yMzM5NDMsNjQuMzI3Mjk0MSAyNTAuMjMzOTQzLDc1Ljk5NDM5ODYgQzI1MC4yMzM5NDMsODcuNjYxNTAzIDI0Ny44NDcxMzQsMTExLjE4MjA3MyAyNDcuODQ3MTM0LDExMS4xODIwNzMgQzI0NS43MjI0MiwxMzUuMzgyMDQ2IDIyNC4zNDkwNjcsMTU2LjUxNDgwNiAyMDAuMTE1NzkyLDE1OC4yOTU1MDQgQzIwMC4xMTU3OTIsMTU4LjI5NTUwNCAxNTIuMzM1NjQ2LDE2Mi4yODk0NTcgMTI4LjUsMTYyLjI4OTQ1NyBDMTA0LjY2NDM1NCwxNjIuMjg5NDU3IDU2Ljg2NTU4MTYsMTU4LjI5NDE3NSA1Ni44NjU1ODE2LDE1OC4yOTQxNzUgQzMyLjYzOTI4OTgsMTU2LjQ3NDg1MiAxMS41MzUxMTA0LDEzNS4zNTMxMDcgOS44MTQ2NzM1MiwxMTEuMTE0ODAxIEM5LjgxNDY3MzUyLDExMS4xMTQ4MDEgNy44NDU5MTI0Niw4Ny42NjE1MDM3IDcuODQ1OTEyNDYsNzUuOTk0Mzk5MyBaIiBpZD0iUmVjdGFuZ2xlLTczLUNvcHktMyIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	bottomPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI1OCAxOTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlJlY3RhbmdsZSA3MyBDb3B5IDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iUHJvdG90eXBlLTEtR3JvdXAtQ29weS05IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTkxLjAwMDAwMCwgLTEwNC4wMDAwMDApIiBmaWxsPSIjRkZBQzUzIj4KICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS03My1Db3B5LTItKy1SZWN0YW5nbGUtNzMtQ29weS0zLSstT3ZhbC0xLUNvcHktNS1Db3B5LUNvcHktQ29weS1Db3B5LUNvcHktQ29weS1Db3B5LUNvcHktQ29weS1Db3B5IiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OTEuMDAwMDAwLCA5OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjA2MzY1NTg1MzMsOTkgQzAuMDYzNjU1ODUzMyw4Mi42NjM2NzggMi41NTcwOTAzMiw0OS45MDAxNTAzIDIuNTU3MDkwMzIsNDkuOTAwMTUwMyBDNC4xODI0MTQ0NiwyNS42NTQ3NjY4IDI1LjE4OTUwNTIsNiA0OS40OTc2MDgyLDYgTDIwNy41MDIzOTIsNiBDMjMxLjgwMTYsNiAyNTIuOTQzMjYxLDI1LjYzNjc5NTcgMjU0LjYzOTIyNiw0OS44ODQ0OTA0IEMyNTQuNjM5MjI2LDQ5Ljg4NDQ5MDQgMjU3LjMwMDk0OSw4Mi42NjM2NzggMjU3LjMwMDk0OSw5OSBDMjU3LjMwMDk0OSwxMTUuMzM2MzIyIDI1NC42MzgxNjcsMTQ4LjEzMTE2OSAyNTQuNjM4MTY3LDE0OC4xMzExNjkgQzI1Mi45MDUwMDUsMTcyLjM1OTI1NSAyMzEuODI0NDQ5LDE5Mi44NzI5NzUgMjA3LjU0NjIyOSwxOTMuOTAyOTYzIEMyMDcuNTQ2MjI5LDE5My45MDI5NjMgMTUzLjg4MzQxNSwxOTYuNDYyMzcyIDEyOC41LDE5Ni40NjIzNzIgQzEwMy4xMTY1ODUsMTk2LjQ2MjM3MiA0OS40NTM3NzA3LDE5My45MDI5NjMgNDkuNDUzNzcwNywxOTMuOTAyOTYzIEMyNS4xNzg3NzM1LDE5Mi44NTE5ODYgNC4xNDU3MDMyNywxNzIuMzM3Mjc4IDIuNTU3MDkwMzIsMTQ4LjA5OTg1IEMyLjU1NzA5MDMyLDE0OC4wOTk4NSAwLjA2MzY1NTg1MzMsMTE1LjMzNjMyMiAwLjA2MzY1NTg1MzMsOTkgWiIgaWQ9IlJlY3RhbmdsZS03My1Db3B5LTIiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
}

const orange = {
	lightColor: '#FF7853',
	darkColor: '#E95832',
	topPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI0NCAxNjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlJlY3RhbmdsZSA3MyBDb3B5IDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iUHJvdG90eXBlLTEtR3JvdXAtQ29weS05IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTk4LjAwMDAwMCwgLTk4LjAwMDAwMCkiIGZpbGw9IiNGRjc4NTMiPgogICAgICAgICAgICA8cGF0aCBkPSJNOTk4Ljg0NTkxMiwxNzMuOTk0Mzk5IEM5OTguODQ1OTEyLDE2Mi4zMjcyOTUgMTAwMC44MTQ2NywxMzguODc4Mjc2IDEwMDAuODE0NjcsMTM4Ljg3ODI3NiBDMTAwMi41NzM4OCwxMTQuNjQ0OTczIDEwMjMuNjUwOTMsOTYuNTE0ODA2IDEwNDcuODg0MjEsOTguMjk1NTAzOCBDMTA0Ny44ODQyMSw5OC4yOTU1MDM4IDEwOTUuNjY0MzUsMTAyLjI4OTQ1NyAxMTE5LjUsMTAyLjI4OTQ1NyBDMTE0My4zMzU2NSwxMDIuMjg5NDU3IDExOTEuMTM0NDIsOTguMjk0MTc0NiAxMTkxLjEzNDQyLDk4LjI5NDE3NDYgQzEyMTUuMzYwNzEsOTYuNDc0ODUyMiAxMjM2Ljc2OTcyLDExNC42MjAxNjYgMTIzOC44NDgyNSwxMzguODI0NDY3IEMxMjM4Ljg0ODI1LDEzOC44MjQ0NjcgMTI0MS4yMzM5NCwxNjIuMzI3Mjk0IDEyNDEuMjMzOTQsMTczLjk5NDM5OSBDMTI0MS4yMzM5NCwxODUuNjYxNTAzIDEyMzguODQ3MTMsMjA5LjE4MjA3MyAxMjM4Ljg0NzEzLDIwOS4xODIwNzMgQzEyMzYuNzIyNDIsMjMzLjM4MjA0NiAxMjE1LjM0OTA3LDI1NC41MTQ4MDYgMTE5MS4xMTU3OSwyNTYuMjk1NTA0IEMxMTkxLjExNTc5LDI1Ni4yOTU1MDQgMTE0My4zMzU2NSwyNjAuMjg5NDU3IDExMTkuNSwyNjAuMjg5NDU3IEMxMDk1LjY2NDM1LDI2MC4yODk0NTcgMTA0Ny44NjU1OCwyNTYuMjk0MTc1IDEwNDcuODY1NTgsMjU2LjI5NDE3NSBDMTAyMy42MzkyOSwyNTQuNDc0ODUyIDEwMDIuNTM1MTEsMjMzLjM1MzEwNyAxMDAwLjgxNDY3LDIwOS4xMTQ4MDEgQzEwMDAuODE0NjcsMjA5LjExNDgwMSA5OTguODQ1OTEyLDE4NS42NjE1MDQgOTk4Ljg0NTkxMiwxNzMuOTk0Mzk5IFoiIGlkPSJSZWN0YW5nbGUtNzMtQ29weS0zIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	bottomPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI1OCAxOTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlJlY3RhbmdsZSA3MyBDb3B5IDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iUHJvdG90eXBlLTEtR3JvdXAtQ29weS05IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTkxLjAwMDAwMCwgLTEwNC4wMDAwMDApIiBmaWxsPSIjRTk1ODMyIj4KICAgICAgICAgICAgPHBhdGggZD0iTTk5MS4wNjM2NTYsMTk3IEM5OTEuMDYzNjU2LDE4MC42NjM2NzggOTkzLjU1NzA5LDE0Ny45MDAxNSA5OTMuNTU3MDksMTQ3LjkwMDE1IEM5OTUuMTgyNDE0LDEyMy42NTQ3NjcgMTAxNi4xODk1MSwxMDQgMTA0MC40OTc2MSwxMDQgTDExOTguNTAyMzksMTA0IEMxMjIyLjgwMTYsMTA0IDEyNDMuOTQzMjYsMTIzLjYzNjc5NiAxMjQ1LjYzOTIzLDE0Ny44ODQ0OSBDMTI0NS42MzkyMywxNDcuODg0NDkgMTI0OC4zMDA5NSwxODAuNjYzNjc4IDEyNDguMzAwOTUsMTk3IEMxMjQ4LjMwMDk1LDIxMy4zMzYzMjIgMTI0NS42MzgxNywyNDYuMTMxMTY5IDEyNDUuNjM4MTcsMjQ2LjEzMTE2OSBDMTI0My45MDUwMSwyNzAuMzU5MjU1IDEyMjIuODI0NDUsMjkwLjg3Mjk3NSAxMTk4LjU0NjIzLDI5MS45MDI5NjMgQzExOTguNTQ2MjMsMjkxLjkwMjk2MyAxMTQ0Ljg4MzQyLDI5NC40NjIzNzIgMTExOS41LDI5NC40NjIzNzIgQzEwOTQuMTE2NTgsMjk0LjQ2MjM3MiAxMDQwLjQ1Mzc3LDI5MS45MDI5NjMgMTA0MC40NTM3NywyOTEuOTAyOTYzIEMxMDE2LjE3ODc3LDI5MC44NTE5ODYgOTk1LjE0NTcwMywyNzAuMzM3Mjc4IDk5My41NTcwOSwyNDYuMDk5ODUgQzk5My41NTcwOSwyNDYuMDk5ODUgOTkxLjA2MzY1NiwyMTMuMzM2MzIyIDk5MS4wNjM2NTYsMTk3IFoiIGlkPSJSZWN0YW5nbGUtNzMtQ29weS0yIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
}

const blue = {
	lightColor: '#23CFFC',
	darkColor: '#009AC2',
	topPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI0NCAxNjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmJsdWVUb3A8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iUHJvdG90eXBlLTEtR3JvdXAtQ29weS05IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTk4LjAwMDAwMCwgLTk4LjAwMDAwMCkiIGZpbGw9IiM1N0QwRkQiPgogICAgICAgICAgICA8cGF0aCBkPSJNOTk4Ljg0NTkxMiwxNzMuOTk0Mzk5IEM5OTguODQ1OTEyLDE2Mi4zMjcyOTUgMTAwMC44MTQ2NywxMzguODc4Mjc2IDEwMDAuODE0NjcsMTM4Ljg3ODI3NiBDMTAwMi41NzM4OCwxMTQuNjQ0OTczIDEwMjMuNjUwOTMsOTYuNTE0ODA2IDEwNDcuODg0MjEsOTguMjk1NTAzOCBDMTA0Ny44ODQyMSw5OC4yOTU1MDM4IDEwOTUuNjY0MzUsMTAyLjI4OTQ1NyAxMTE5LjUsMTAyLjI4OTQ1NyBDMTE0My4zMzU2NSwxMDIuMjg5NDU3IDExOTEuMTM0NDIsOTguMjk0MTc0NiAxMTkxLjEzNDQyLDk4LjI5NDE3NDYgQzEyMTUuMzYwNzEsOTYuNDc0ODUyMiAxMjM2Ljc2OTcyLDExNC42MjAxNjYgMTIzOC44NDgyNSwxMzguODI0NDY3IEMxMjM4Ljg0ODI1LDEzOC44MjQ0NjcgMTI0MS4yMzM5NCwxNjIuMzI3Mjk0IDEyNDEuMjMzOTQsMTczLjk5NDM5OSBDMTI0MS4yMzM5NCwxODUuNjYxNTAzIDEyMzguODQ3MTMsMjA5LjE4MjA3MyAxMjM4Ljg0NzEzLDIwOS4xODIwNzMgQzEyMzYuNzIyNDIsMjMzLjM4MjA0NiAxMjE1LjM0OTA3LDI1NC41MTQ4MDYgMTE5MS4xMTU3OSwyNTYuMjk1NTA0IEMxMTkxLjExNTc5LDI1Ni4yOTU1MDQgMTE0My4zMzU2NSwyNjAuMjg5NDU3IDExMTkuNSwyNjAuMjg5NDU3IEMxMDk1LjY2NDM1LDI2MC4yODk0NTcgMTA0Ny44NjU1OCwyNTYuMjk0MTc1IDEwNDcuODY1NTgsMjU2LjI5NDE3NSBDMTAyMy42MzkyOSwyNTQuNDc0ODUyIDEwMDIuNTM1MTEsMjMzLjM1MzEwNyAxMDAwLjgxNDY3LDIwOS4xMTQ4MDEgQzEwMDAuODE0NjcsMjA5LjExNDgwMSA5OTguODQ1OTEyLDE4NS42NjE1MDQgOTk4Ljg0NTkxMiwxNzMuOTk0Mzk5IFoiIGlkPSJibHVlVG9wIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	bottomPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI1OCAxOTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmJsdWVCb3R0b208L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iUHJvdG90eXBlLTEtR3JvdXAtQ29weS05IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTkxLjAwMDAwMCwgLTEwNC4wMDAwMDApIiBmaWxsPSIjM0E5QkMzIj4KICAgICAgICAgICAgPHBhdGggZD0iTTk5MS4wNjM2NTYsMTk3IEM5OTEuMDYzNjU2LDE4MC42NjM2NzggOTkzLjU1NzA5LDE0Ny45MDAxNSA5OTMuNTU3MDksMTQ3LjkwMDE1IEM5OTUuMTgyNDE0LDEyMy42NTQ3NjcgMTAxNi4xODk1MSwxMDQgMTA0MC40OTc2MSwxMDQgTDExOTguNTAyMzksMTA0IEMxMjIyLjgwMTYsMTA0IDEyNDMuOTQzMjYsMTIzLjYzNjc5NiAxMjQ1LjYzOTIzLDE0Ny44ODQ0OSBDMTI0NS42MzkyMywxNDcuODg0NDkgMTI0OC4zMDA5NSwxODAuNjYzNjc4IDEyNDguMzAwOTUsMTk3IEMxMjQ4LjMwMDk1LDIxMy4zMzYzMjIgMTI0NS42MzgxNywyNDYuMTMxMTY5IDEyNDUuNjM4MTcsMjQ2LjEzMTE2OSBDMTI0My45MDUwMSwyNzAuMzU5MjU1IDEyMjIuODI0NDUsMjkwLjg3Mjk3NSAxMTk4LjU0NjIzLDI5MS45MDI5NjMgQzExOTguNTQ2MjMsMjkxLjkwMjk2MyAxMTQ0Ljg4MzQyLDI5NC40NjIzNzIgMTExOS41LDI5NC40NjIzNzIgQzEwOTQuMTE2NTgsMjk0LjQ2MjM3MiAxMDQwLjQ1Mzc3LDI5MS45MDI5NjMgMTA0MC40NTM3NywyOTEuOTAyOTYzIEMxMDE2LjE3ODc3LDI5MC44NTE5ODYgOTk1LjE0NTcwMywyNzAuMzM3Mjc4IDk5My41NTcwOSwyNDYuMDk5ODUgQzk5My41NTcwOSwyNDYuMDk5ODUgOTkxLjA2MzY1NiwyMTMuMzM2MzIyIDk5MS4wNjM2NTYsMTk3IFoiIGlkPSJibHVlQm90dG9tIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='	
}

const pink = {
	lightColor: '#FF7493',
	darkColor: '#E93A53',
	topPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI0NCAxNjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnBpbmtUb3A8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iUHJvdG90eXBlLTEtR3JvdXAtQ29weS05IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTk4LjAwMDAwMCwgLTk4LjAwMDAwMCkiIGZpbGw9IiNGNDc1OTMiPgogICAgICAgICAgICA8cGF0aCBkPSJNOTk4Ljg0NTkxMiwxNzMuOTk0Mzk5IEM5OTguODQ1OTEyLDE2Mi4zMjcyOTUgMTAwMC44MTQ2NywxMzguODc4Mjc2IDEwMDAuODE0NjcsMTM4Ljg3ODI3NiBDMTAwMi41NzM4OCwxMTQuNjQ0OTczIDEwMjMuNjUwOTMsOTYuNTE0ODA2IDEwNDcuODg0MjEsOTguMjk1NTAzOCBDMTA0Ny44ODQyMSw5OC4yOTU1MDM4IDEwOTUuNjY0MzUsMTAyLjI4OTQ1NyAxMTE5LjUsMTAyLjI4OTQ1NyBDMTE0My4zMzU2NSwxMDIuMjg5NDU3IDExOTEuMTM0NDIsOTguMjk0MTc0NiAxMTkxLjEzNDQyLDk4LjI5NDE3NDYgQzEyMTUuMzYwNzEsOTYuNDc0ODUyMiAxMjM2Ljc2OTcyLDExNC42MjAxNjYgMTIzOC44NDgyNSwxMzguODI0NDY3IEMxMjM4Ljg0ODI1LDEzOC44MjQ0NjcgMTI0MS4yMzM5NCwxNjIuMzI3Mjk0IDEyNDEuMjMzOTQsMTczLjk5NDM5OSBDMTI0MS4yMzM5NCwxODUuNjYxNTAzIDEyMzguODQ3MTMsMjA5LjE4MjA3MyAxMjM4Ljg0NzEzLDIwOS4xODIwNzMgQzEyMzYuNzIyNDIsMjMzLjM4MjA0NiAxMjE1LjM0OTA3LDI1NC41MTQ4MDYgMTE5MS4xMTU3OSwyNTYuMjk1NTA0IEMxMTkxLjExNTc5LDI1Ni4yOTU1MDQgMTE0My4zMzU2NSwyNjAuMjg5NDU3IDExMTkuNSwyNjAuMjg5NDU3IEMxMDk1LjY2NDM1LDI2MC4yODk0NTcgMTA0Ny44NjU1OCwyNTYuMjk0MTc1IDEwNDcuODY1NTgsMjU2LjI5NDE3NSBDMTAyMy42MzkyOSwyNTQuNDc0ODUyIDEwMDIuNTM1MTEsMjMzLjM1MzEwNyAxMDAwLjgxNDY3LDIwOS4xMTQ4MDEgQzEwMDAuODE0NjcsMjA5LjExNDgwMSA5OTguODQ1OTEyLDE4NS42NjE1MDQgOTk4Ljg0NTkxMiwxNzMuOTk0Mzk5IFoiIGlkPSJwaW5rVG9wIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	bottomPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI1OCAxOTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnBpbmtCb3R0b208L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iUHJvdG90eXBlLTEtR3JvdXAtQ29weS05IiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTkxLjAwMDAwMCwgLTEwNC4wMDAwMDApIiBmaWxsPSIjREQzQjUzIj4KICAgICAgICAgICAgPHBhdGggZD0iTTk5MS4wNjM2NTYsMTk3IEM5OTEuMDYzNjU2LDE4MC42NjM2NzggOTkzLjU1NzA5LDE0Ny45MDAxNSA5OTMuNTU3MDksMTQ3LjkwMDE1IEM5OTUuMTgyNDE0LDEyMy42NTQ3NjcgMTAxNi4xODk1MSwxMDQgMTA0MC40OTc2MSwxMDQgTDExOTguNTAyMzksMTA0IEMxMjIyLjgwMTYsMTA0IDEyNDMuOTQzMjYsMTIzLjYzNjc5NiAxMjQ1LjYzOTIzLDE0Ny44ODQ0OSBDMTI0NS42MzkyMywxNDcuODg0NDkgMTI0OC4zMDA5NSwxODAuNjYzNjc4IDEyNDguMzAwOTUsMTk3IEMxMjQ4LjMwMDk1LDIxMy4zMzYzMjIgMTI0NS42MzgxNywyNDYuMTMxMTY5IDEyNDUuNjM4MTcsMjQ2LjEzMTE2OSBDMTI0My45MDUwMSwyNzAuMzU5MjU1IDEyMjIuODI0NDUsMjkwLjg3Mjk3NSAxMTk4LjU0NjIzLDI5MS45MDI5NjMgQzExOTguNTQ2MjMsMjkxLjkwMjk2MyAxMTQ0Ljg4MzQyLDI5NC40NjIzNzIgMTExOS41LDI5NC40NjIzNzIgQzEwOTQuMTE2NTgsMjk0LjQ2MjM3MiAxMDQwLjQ1Mzc3LDI5MS45MDI5NjMgMTA0MC40NTM3NywyOTEuOTAyOTYzIEMxMDE2LjE3ODc3LDI5MC44NTE5ODYgOTk1LjE0NTcwMywyNzAuMzM3Mjc4IDk5My41NTcwOSwyNDYuMDk5ODUgQzk5My41NTcwOSwyNDYuMDk5ODUgOTkxLjA2MzY1NiwyMTMuMzM2MzIyIDk5MS4wNjM2NTYsMTk3IFoiIGlkPSJwaW5rQm90dG9tIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
}

const purple = {
	lightColor: '#F477FB',
	darkColor: '#C93BD9',
	topPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI0NCAxNjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnB1cnBsZVRvcDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJQcm90b3R5cGUtMS1Hcm91cC1Db3B5LTkiIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05OTguMDAwMDAwLCAtOTguMDAwMDAwKSIgZmlsbD0iI0VCN0JGQyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05OTguODQ1OTEyLDE3My45OTQzOTkgQzk5OC44NDU5MTIsMTYyLjMyNzI5NSAxMDAwLjgxNDY3LDEzOC44NzgyNzYgMTAwMC44MTQ2NywxMzguODc4Mjc2IEMxMDAyLjU3Mzg4LDExNC42NDQ5NzMgMTAyMy42NTA5Myw5Ni41MTQ4MDYgMTA0Ny44ODQyMSw5OC4yOTU1MDM4IEMxMDQ3Ljg4NDIxLDk4LjI5NTUwMzggMTA5NS42NjQzNSwxMDIuMjg5NDU3IDExMTkuNSwxMDIuMjg5NDU3IEMxMTQzLjMzNTY1LDEwMi4yODk0NTcgMTE5MS4xMzQ0Miw5OC4yOTQxNzQ2IDExOTEuMTM0NDIsOTguMjk0MTc0NiBDMTIxNS4zNjA3MSw5Ni40NzQ4NTIyIDEyMzYuNzY5NzIsMTE0LjYyMDE2NiAxMjM4Ljg0ODI1LDEzOC44MjQ0NjcgQzEyMzguODQ4MjUsMTM4LjgyNDQ2NyAxMjQxLjIzMzk0LDE2Mi4zMjcyOTQgMTI0MS4yMzM5NCwxNzMuOTk0Mzk5IEMxMjQxLjIzMzk0LDE4NS42NjE1MDMgMTIzOC44NDcxMywyMDkuMTgyMDczIDEyMzguODQ3MTMsMjA5LjE4MjA3MyBDMTIzNi43MjI0MiwyMzMuMzgyMDQ2IDEyMTUuMzQ5MDcsMjU0LjUxNDgwNiAxMTkxLjExNTc5LDI1Ni4yOTU1MDQgQzExOTEuMTE1NzksMjU2LjI5NTUwNCAxMTQzLjMzNTY1LDI2MC4yODk0NTcgMTExOS41LDI2MC4yODk0NTcgQzEwOTUuNjY0MzUsMjYwLjI4OTQ1NyAxMDQ3Ljg2NTU4LDI1Ni4yOTQxNzUgMTA0Ny44NjU1OCwyNTYuMjk0MTc1IEMxMDIzLjYzOTI5LDI1NC40NzQ4NTIgMTAwMi41MzUxMSwyMzMuMzUzMTA3IDEwMDAuODE0NjcsMjA5LjExNDgwMSBDMTAwMC44MTQ2NywyMDkuMTE0ODAxIDk5OC44NDU5MTIsMTg1LjY2MTUwNCA5OTguODQ1OTEyLDE3My45OTQzOTkgWiIgaWQ9InB1cnBsZVRvcCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
	bottomPressedEl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iMCAwIDI1OCAxOTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjQuNCAoMTcyNDkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnB1cnBsZUJvdHRvbTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJQcm90b3R5cGUtMS1Hcm91cC1Db3B5LTkiIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05OTEuMDAwMDAwLCAtMTA0LjAwMDAwMCkiIGZpbGw9IiNDMDQzREEiPgogICAgICAgICAgICA8cGF0aCBkPSJNOTkxLjA2MzY1NiwxOTcgQzk5MS4wNjM2NTYsMTgwLjY2MzY3OCA5OTMuNTU3MDksMTQ3LjkwMDE1IDk5My41NTcwOSwxNDcuOTAwMTUgQzk5NS4xODI0MTQsMTIzLjY1NDc2NyAxMDE2LjE4OTUxLDEwNCAxMDQwLjQ5NzYxLDEwNCBMMTE5OC41MDIzOSwxMDQgQzEyMjIuODAxNiwxMDQgMTI0My45NDMyNiwxMjMuNjM2Nzk2IDEyNDUuNjM5MjMsMTQ3Ljg4NDQ5IEMxMjQ1LjYzOTIzLDE0Ny44ODQ0OSAxMjQ4LjMwMDk1LDE4MC42NjM2NzggMTI0OC4zMDA5NSwxOTcgQzEyNDguMzAwOTUsMjEzLjMzNjMyMiAxMjQ1LjYzODE3LDI0Ni4xMzExNjkgMTI0NS42MzgxNywyNDYuMTMxMTY5IEMxMjQzLjkwNTAxLDI3MC4zNTkyNTUgMTIyMi44MjQ0NSwyOTAuODcyOTc1IDExOTguNTQ2MjMsMjkxLjkwMjk2MyBDMTE5OC41NDYyMywyOTEuOTAyOTYzIDExNDQuODgzNDIsMjk0LjQ2MjM3MiAxMTE5LjUsMjk0LjQ2MjM3MiBDMTA5NC4xMTY1OCwyOTQuNDYyMzcyIDEwNDAuNDUzNzcsMjkxLjkwMjk2MyAxMDQwLjQ1Mzc3LDI5MS45MDI5NjMgQzEwMTYuMTc4NzcsMjkwLjg1MTk4NiA5OTUuMTQ1NzAzLDI3MC4zMzcyNzggOTkzLjU1NzA5LDI0Ni4wOTk4NSBDOTkzLjU1NzA5LDI0Ni4wOTk4NSA5OTEuMDYzNjU2LDIxMy4zMzYzMjIgOTkxLjA2MzY1NiwxOTcgWiIgaWQ9InB1cnBsZUJvdHRvbSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
}

//TODO: make URI different colors instead of exporting them every time on Sketch.

const randomBox = () => {
	const crateColors = [
		green,
		yellow, 
		orange,
		blue,
		pink,
		purple
	];
	return crateColors[Math.floor(Math.random() * 6)];
}


export {
	green,
	yellow,
	orange,
	blue,
	pink,
	purple,
	randomBox
}