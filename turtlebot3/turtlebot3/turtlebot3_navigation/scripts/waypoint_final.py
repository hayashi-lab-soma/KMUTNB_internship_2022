#!/usr/bin/env python3                                                            
from dataclasses import dataclass
import rospy
import tf
import actionlib
from actionlib_msgs.msg import *
from std_msgs.msg import String
from geometry_msgs.msg import Pose, PoseWithCovarianceStamped, Point, Quaternion, Twist
from move_base_msgs.msg import MoveBaseAction, MoveBaseGoal
from math import pi

class WpNavi():
    def __init__(self):
        self.way_point = [[1.6, -1.78, 0.0],[3.0, -0.9, pi],[0.0, 0.0, 0.0]]
        #self.way_point = [[0.8, 0.0, 0.0], [1.3, 0.0, 0.0],[1.8, 0.0, 0.0], [1.3, 0.0, 0.0],[0.8, 0.0, 0.0],[0.0, 0.00, 0.0]]
        #self.goal_pos = [[0.5,0.0,0.0],[1.0,0.0,0.0],[1.5,0.0,0.0]]
        self.ac = actionlib.SimpleActionClient('move_base', MoveBaseAction)
        self.goal = MoveBaseGoal()
        self.react_goal = ""
        self.sub_react_goal = rospy.Subscriber('react_goal', String, self.cbReactGoal, queue_size=1)
        rospy.on_shutdown(self.shutdown)

    def shutdown(self):
        rospy.loginfo("The robot was terminated.")                               
        self.ac.cancel_goal()

    def cbReactGoal(self, msg):
        self.react_goal = msg.data
        rospy.loginfo(self.react_goal)

    def process(self):
        while not self.ac.wait_for_server(rospy.Duration(5)):
            rospy.loginfo("Waiting for the move_base action server to come up.")
        rospy.loginfo("The server comes up.")


        while not rospy.is_shutdown():
            #switch process by react_goal topiccontent
            if self.react_goal == "pickup":
                self.goal.target_pose.header.frame_id = 'map'
                self.goal.target_pose.header.stamp = rospy.Time.now()
                self.goal.target_pose.pose.position.x = self.way_point[0][0]
                self.goal.target_pose.pose.position.y = self.way_point[0][1]

                q = tf.transformations.quaternion_from_euler(0, 0, self.way_point[0][2])
                self.goal.target_pose.pose.orientation = Quaternion(q[0],q[1],q[2],q[3])
                rospy.loginfo("Sending goal: pickup")
                self.ac.send_goal(self.goal)

                succeeded = self.ac.wait_for_result(rospy.Duration(30))
                state = self.ac.get_state()
                print(state)
                if succeeded:
                    rospy.loginfo("Succeeded: Reach pickup position"+"("+str(state)+")")
                else:
                    rospy.loginfo("Failed: Reach pickup position"+"("+str(state)+")")
                rospy.sleep(2)
            
            elif self.react_goal == "delivery":
                self.goal.target_pose.header.frame_id = 'map'
                self.goal.target_pose.header.stamp = rospy.Time.now()
                self.goal.target_pose.pose.position.x = self.way_point[1][0]
                self.goal.target_pose.pose.position.y = self.way_point[1][1]

                q = tf.transformations.quaternion_from_euler(0, 0, self.way_point[1][2])
                self.goal.target_pose.pose.orientation = Quaternion(q[0],q[1],q[2],q[3])
                rospy.loginfo("Sending goal: pickup")
                self.ac.send_goal(self.goal)

                succeeded = self.ac.wait_for_result(rospy.Duration(30))
                state = self.ac.get_state()
                print(state)
                if succeeded:
                    rospy.loginfo("Succeeded: Reach delivery position"+"("+str(state)+")")
                else:
                    rospy.loginfo("Failed: Reach delivery position"+"("+str(state)+")")
                rospy.sleep(2)
            rospy.wait_for_message("react_goal", String)

        print("Done")

if __name__ == '__main__':
    try:
        rospy.init_node('wp_navi', anonymous=True)
        wp_navi = WpNavi()
        wp_navi.process()
        rospy.spin()
    except rospy.ROSInterruptException:
        rospy.loginfo("WP navigation finished.")