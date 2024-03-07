import React, { useState } from "react";
import { ChakraProvider, Box, VStack, HStack, Text, Input, Button, Avatar, Divider, IconButton, useToast } from "@chakra-ui/react";
import { FaTwitter, FaFeatherAlt, FaHeart, FaRegComment, FaRetweet } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetContent, setTweetContent] = useState("");
  const toast = useToast();

  const handleTweetPost = () => {
    if (tweetContent.trim() === "") {
      toast({
        title: "Cannot send an empty tweet.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setTweets([{ content: tweetContent, id: Date.now() }, ...tweets]);
    setTweetContent("");
  };

  return (
    <ChakraProvider>
      <Box maxW="600px" mx="auto" p={5}>
        <VStack spacing={4} align="stretch">
          {/* Header */}
          <HStack justifyContent="space-between">
            <Text fontSize="2xl" fontWeight="bold">
              <FaTwitter /> TwitClone
            </Text>
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTgyMjExN3ww&ixlib=rb-4.0.3&q=80&w=1080" />
          </HStack>

          {/* Tweet Input */}
          <HStack>
            <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTgyMjExN3ww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Input placeholder="What's happening?" value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} />
            <IconButton aria-label="Send tweet" icon={<FaFeatherAlt />} onClick={handleTweetPost} />
          </HStack>

          {/* Tweets List */}
          <VStack divider={<Divider />} spacing={4}>
            {tweets.map((tweet) => (
              <HStack key={tweet.id} spacing={3} align="start">
                <Avatar src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTgyMjExN3ww&ixlib=rb-4.0.3&q=80&w=1080" />
                <VStack align="stretch" spacing={1}>
                  <Text fontWeight="bold">User</Text>
                  <Text>{tweet.content}</Text>
                  <HStack spacing={3}>
                    <IconButton aria-label="Like tweet" icon={<FaHeart />} size="sm" variant="ghost" />
                    <IconButton aria-label="Retweet" icon={<FaRetweet />} size="sm" variant="ghost" />
                    <IconButton aria-label="Comment on tweet" icon={<FaRegComment />} size="sm" variant="ghost" />
                  </HStack>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
