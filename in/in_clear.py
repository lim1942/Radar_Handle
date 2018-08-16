# -*- coding: utf-8 -*-
# @Author: lim
# @Date:   2018-07-27 09:24:33
# @Last Modified by:   lim
# @Last Modified time: 2018-08-16 13:42:51



"""Script to clear point and group 
	and js in radar dirctory ,
	so you must be careful"""
import sys
ROOT_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(ROOT_PATH)

from config import ALL_POINT_PATH, ALL_POINT_PATH

ALL_POINT_PATH = 'D:\\TRS\\TRSInforadar5.1\\trsrobot_update\\conf\\start.lst'
ALL_POINT_PATH = 'D:\\TRS\\TRSInforadar5.1\\trsrobot_update\\conf\\group.lst'
a = input('be careful ... press y to continue..')
if a == 'y':
	with open(ALL_POINT_PATH,'w') as f:
		f.write('')
	with open(ALL_POINT_PATH,'w') as f:
		f.write('')
	print('done ...')
else:
	print('not.. clear')