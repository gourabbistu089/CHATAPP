import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //todo SOCKET IO functionality
    await Promise.all([conversation.save()]);
    return res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error while sending message : ", error.message);
    res
      .status(500)
      .json({ success: false, message: "Error while sending message" });
  }
};

export const getMessages = async (req,res) => {
  try {
    const { id: partnerId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, partnerId] },
    }).populate("messages");

    if (!conversation) {
      return res
        .status(404)
        .json({ success: false, message: "Conversation not found" });
    }

    return res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error while getting messages : ", error.message);
    res
      .status(500)
      .json({ success: false, message: "Error while getting messages" });
  }
};
